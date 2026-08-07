import * as React from 'react'
import { render } from '@react-email/render'
import { createClient } from '@supabase/supabase-js'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SITE_NAME = 'Solution Architects LLC'
const SENDER_DOMAIN = 'notify.solutionarchitectsllc.com'
const FROM_DOMAIN = 'notify.solutionarchitectsllc.com'

function redactEmail(email?: string | null): string {
  if (!email) return '***'
  const [local, domain] = email.split('@')
  if (!local || !domain) return '***'
  return `${local[0]}***@${domain}`
}

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Server-side (service-role) transactional send for public, unauthenticated
 * triggers such as the website contact form. Mirrors the queue behaviour of
 * /lovable/email/transactional/send without requiring a user JWT.
 */
export async function sendInternalTransactionalEmail(opts: {
  templateName: string
  recipientEmail: string
  idempotencyKey: string
  templateData?: Record<string, unknown>
}): Promise<{ queued: boolean; reason?: string }> {
  const supabaseUrl = process.env['SUPABASE_URL'] ?? process.env['VITE_SUPABASE_URL']
  const serviceKey = process.env['SUPABASE_SERVICE_ROLE_KEY']
  if (!supabaseUrl || !serviceKey) {
    console.error('Internal email send: missing server configuration')
    return { queued: false, reason: 'configuration_error' }
  }

  const template = TEMPLATES[opts.templateName]
  if (!template) return { queued: false, reason: 'template_not_found' }

  const recipient = template.to || opts.recipientEmail
  if (!recipient) return { queued: false, reason: 'missing_recipient' }

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const normalized = recipient.toLowerCase()
  const messageId = crypto.randomUUID()
  const templateData = opts.templateData ?? {}

  const { data: suppressed, error: suppressionError } = await supabase
    .from('suppressed_emails')
    .select('id')
    .eq('email', normalized)
    .maybeSingle()

  if (suppressionError) {
    console.error('Internal email send: suppression check failed', suppressionError.message)
    return { queued: false, reason: 'suppression_check_failed' }
  }

  if (suppressed) {
    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: opts.templateName,
      recipient_email: recipient,
      status: 'suppressed',
    })
    return { queued: false, reason: 'email_suppressed' }
  }

  let unsubscribeToken: string
  const { data: existing } = await supabase
    .from('email_unsubscribe_tokens')
    .select('token, used_at')
    .eq('email', normalized)
    .maybeSingle()

  if (existing && !existing.used_at) {
    unsubscribeToken = existing.token
  } else if (!existing) {
    unsubscribeToken = generateToken()
    await supabase
      .from('email_unsubscribe_tokens')
      .upsert({ token: unsubscribeToken, email: normalized }, { onConflict: 'email', ignoreDuplicates: true })
    const { data: stored } = await supabase
      .from('email_unsubscribe_tokens')
      .select('token')
      .eq('email', normalized)
      .maybeSingle()
    if (!stored) return { queued: false, reason: 'token_error' }
    unsubscribeToken = stored.token
  } else {
    return { queued: false, reason: 'email_suppressed' }
  }

  const element = React.createElement(template.component, templateData)
  const html = await render(element)
  const text = await render(element, { plainText: true })
  const subject =
    typeof template.subject === 'function' ? template.subject(templateData) : template.subject

  await supabase.from('email_send_log').insert({
    message_id: messageId,
    template_name: opts.templateName,
    recipient_email: recipient,
    status: 'pending',
  })

  const { error: enqueueError } = await supabase.rpc('enqueue_email', {
    queue_name: 'transactional_emails',
    payload: {
      message_id: messageId,
      to: recipient,
      from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
      sender_domain: SENDER_DOMAIN,
      subject,
      html,
      text,
      purpose: 'transactional',
      label: opts.templateName,
      idempotency_key: opts.idempotencyKey,
      unsubscribe_token: unsubscribeToken,
      queued_at: new Date().toISOString(),
    },
  })

  if (enqueueError) {
    console.error('Internal email send: enqueue failed', enqueueError.message, redactEmail(recipient))
    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: opts.templateName,
      recipient_email: recipient,
      status: 'failed',
      error_message: 'Failed to enqueue email',
    })
    return { queued: false, reason: 'enqueue_failed' }
  }

  return { queued: true }
}

import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  businessName?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  submittedAt?: string
}

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { maxWidth: '600px', padding: '28px 26px' }
const heading = { color: '#0B2341', fontSize: '22px', margin: '0 0 4px' }
const sub = { color: '#5b6b7c', fontSize: '13px', margin: '0 0 20px' }
const label = { color: '#1D8A5B', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' as const, margin: '0 0 2px' }
const value = { color: '#0B2341', fontSize: '15px', margin: '0 0 14px' }
const messageBox = {
  backgroundColor: '#f4f7fa',
  borderLeft: '3px solid #1D8A5B',
  borderRadius: '6px',
  padding: '14px 16px',
  color: '#0B2341',
  fontSize: '15px',
  whiteSpace: 'pre-wrap' as const,
}

const Row = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Section>
    <Text style={label}>{title}</Text>
    <Text style={value}>{children}</Text>
  </Section>
)

const ContactRequestEmail = ({
  name,
  businessName,
  email,
  phone,
  service,
  message,
  submittedAt,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New request from ${name || 'a visitor'}${service ? ` — ${service}` : ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Website Request</Heading>
        <Text style={sub}>Submitted via solutionarchitectsllc.com{submittedAt ? ` · ${submittedAt}` : ''}</Text>
        <Hr />
        <Row title="Name">{name || '—'}</Row>
        {businessName ? <Row title="Business">{businessName}</Row> : null}
        <Row title="Email">
          {email ? <Link href={`mailto:${email}`}>{email}</Link> : '—'}
        </Row>
        {phone ? (
          <Row title="Phone">
            <Link href={`tel:${phone}`}>{phone}</Link>
          </Row>
        ) : null}
        <Row title="Service Requested">{service || '—'}</Row>
        <Text style={label}>Message</Text>
        <Section style={messageBox}>
          <Text style={{ margin: 0, color: '#0B2341', fontSize: '15px' }}>{message || '—'}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactRequestEmail,
  subject: (data: Record<string, any>) =>
    `New request: ${data['service'] || 'General Inquiry'} — ${data['name'] || 'Website visitor'}`,
  displayName: 'Contact form request',
  previewData: {
    name: 'Jane Doe',
    businessName: 'Acme LLC',
    email: 'jane@example.com',
    phone: '(502) 555-0134',
    service: 'Business Formation',
    message: 'I would like help forming an LLC in Kentucky.',
    submittedAt: 'Aug 7, 2026, 11:00 AM ET',
  },
} satisfies TemplateEntry

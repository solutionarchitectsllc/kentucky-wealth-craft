import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components'

interface MagicLinkEmailProps {
  siteName: string
  confirmationUrl: string
}

export const MagicLinkEmail = ({
  siteName,
  confirmationUrl,
}: MagicLinkEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your login link for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>Solution Architects LLC</Text>
        <Heading style={h1}>Your login link</Heading>
        <Text style={text}>
          Click the button below to log in to {siteName}. This link will expire
          shortly.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Log In
        </Button>
        <Text style={footer}>
          If you didn't request this link, you can safely ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default MagicLinkEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
}
const container = {
  maxWidth: '600px',
  padding: '32px 28px',
  border: '1px solid #e3e8ee',
  borderRadius: '14px',
  borderTop: '4px solid #1D8A5B',
}
const brand = {
  fontSize: '13px',
  fontWeight: 'bold' as const,
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  color: '#1D8A5B',
  margin: '0 0 18px',
}
const h1 = {
  fontSize: '24px',
  fontWeight: 'bold' as const,
  color: '#0B2341',
  margin: '0 0 18px',
}
const text = {
  fontSize: '15px',
  color: '#42536a',
  lineHeight: '1.65',
  margin: '0 0 22px',
}
const link = { color: '#1D8A5B', textDecoration: 'underline' }
const button = {
  backgroundColor: '#1D8A5B',
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: 'bold' as const,
  borderRadius: '10px',
  padding: '14px 26px',
  textDecoration: 'none',
  display: 'inline-block',
}
const footer = {
  fontSize: '12px',
  color: '#8a97a8',
  lineHeight: '1.6',
  margin: '32px 0 0',
  borderTop: '1px solid #eef1f5',
  paddingTop: '16px',
}

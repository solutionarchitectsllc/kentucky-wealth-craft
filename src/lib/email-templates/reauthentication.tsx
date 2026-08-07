import * as React from 'react'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components'

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your verification code</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>Solution Architects LLC</Text>
        <Heading style={h1}>Confirm reauthentication</Heading>
        <Text style={text}>Use the code below to confirm your identity:</Text>
        <Text style={codeStyle}>{token}</Text>
        <Text style={footer}>
          This code will expire shortly. If you didn't request this, you can
          safely ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

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
const codeStyle = {
  display: 'inline-block',
  fontFamily: "'SFMono-Regular', Menlo, Consolas, monospace",
  fontSize: '30px',
  fontWeight: 'bold' as const,
  letterSpacing: '0.22em',
  color: '#0B2341',
  backgroundColor: '#f4f7fa',
  border: '1px solid #e3e8ee',
  borderRadius: '10px',
  padding: '14px 22px',
  margin: '0 0 22px',
}

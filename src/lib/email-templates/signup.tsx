import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from '@react-email/components'

interface SignupEmailProps {
  siteName: string
  siteUrl: string
  recipient: string
  confirmationUrl: string
}

export const SignupEmail = ({
  siteName,
  siteUrl,
  recipient,
  confirmationUrl,
}: SignupEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Confirm your email for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>Solution Architects LLC</Text>
        <Heading style={h1}>Confirm your email</Heading>
        <Text style={text}>
          Thanks for signing up for{' '}
          <Link href={siteUrl} style={link}>
            <strong>{siteName}</strong>
          </Link>
          !
        </Text>
        <Text style={text}>
          Please confirm your email address (
          <Link href={`mailto:${recipient}`} style={link}>
            {recipient}
          </Link>
          ) by clicking the button below:
        </Text>
        <Button style={button} href={confirmationUrl}>
          Verify Email
        </Button>
        <Text style={footer}>
          If you didn't create an account, you can safely ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default SignupEmail

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

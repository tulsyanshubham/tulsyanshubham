import * as React from 'react';
import { Html, Head, Body, Container, Heading, Text, Link } from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  msg: string;
}

const SendEmail = ({ name, email, msg }: EmailProps) => {
  return (
    <Html>
      <Head />
      <Body>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>New Message Received</Heading>
          <Text style={textStyle}><strong>From:</strong> {name}</Text>
          <Text style={textStyle}><strong>Email:</strong> <Link href={`mailto:${email}`} style={linkStyle}>{email}</Link></Text>
          <Text style={textStyle}><strong>Message:</strong> {msg}</Text>
        </Container>
      </Body>
    </Html>
  );
};

// const bodyStyle: React.CSSProperties = {
//   backgroundColor: '#f6f6f6',
//   padding: '20px',
//   fontFamily: 'Arial, sans-serif',
// };

const containerStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '0 auto',
};

const headingStyle: React.CSSProperties = {
  color: '#333333',
  marginBottom: '20px',
};

const textStyle: React.CSSProperties = {
  color: '#555555',
  marginBottom: '10px',
  lineHeight: '1.5',
};

const linkStyle: React.CSSProperties = {
  color: '#1a73e8',
  textDecoration: 'none',
};

const footerStyle: React.CSSProperties = {
  color: '#999999',
  marginTop: '20px',
  fontSize: '12px',
};

export default SendEmail;

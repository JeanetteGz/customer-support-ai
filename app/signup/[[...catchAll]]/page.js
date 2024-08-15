// app/signup/[...catchAll]/page.js

import React from 'react';
import { SignUp } from '@clerk/nextjs';
import { Box, Stack, Typography, Button, Container, CssBaseline } from '@mui/material';

const SignUpPage = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="#F0F4F8"
      padding={2}
    >
      <CssBaseline />
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Stack spacing={4} alignItems="center" justifyContent="center">
          <Typography variant="h2" color="#333C4D" fontWeight="bold">
            Create Your Account
          </Typography>
          <Typography variant="h6" color="#333C4D" paragraph>
            Join us to start your journey towards better health and fitness with personalized guidance from our AI coach.
          </Typography>
          
          {/* Clerk Sign-Up Form */}
          <SignUp
            path="/signup"
            routing="path"
            signInUrl="/signin" // Redirect to /signin if the user already has an account
            fallbackRedirectUrl="/chatbot" // Redirect to /chatbot after sign up
            appearance={{
              elements: {
                formButtonPrimary: {
                  backgroundColor: '#333C4D',
                  color: 'white',
                  borderRadius: '16px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  '&:hover': {
                    backgroundColor: '#2a2f3e',
                  },
                },
                card: {
                  boxShadow: 'none',
                },
              },
            }}
          />
          
          {/* Sign-In Option */}
          <Typography variant="h6" color="#333C4D" paragraph>
            Already have an account?
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: '#333C4D',
              borderColor: '#333C4D',
              borderRadius: '16px',
              padding: '10px 20px',
              fontSize: '16px',
              '&:hover': {
                borderColor: '#2a2f3e',
                backgroundColor: '#e0e5e8',
              },
            }}
            href="/signin" // Redirect URL for sign-in
          >
            Sign In
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default SignUpPage;


"use client";
import { useState } from 'react';
import { Box, Stack, Typography, Button, Container, CssBaseline, TextField, Alert } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Simple validation (expand as needed)
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Simulate API call for sign-up
    try {
      // Here you would make an API call to create the user
      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ fullName, email, password }),
      // });
      // const result = await response.json();

      // If the response is successful
      setSuccessMessage('AccountCreated');
      setTimeout(() => {
        router.push('/signin'); // Redirect to sign-in page after 2 seconds
      }, 2000);
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Failed to create account. Please try again.');
    }
  };

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
          
          {/* Sign-Up Form */}
          <Stack component="form" spacing={2} width="100%" onSubmit={handleSignUp}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              sx={{ borderRadius: '16px' }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ borderRadius: '16px' }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ borderRadius: '16px' }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ borderRadius: '16px' }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#333C4D',
                color: 'white',
                borderRadius: '16px',
                padding: '10px 20px',
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: '#2a2f3e',
                },
              }}
            >
              Sign Up
            </Button>
          </Stack>
          
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

          {/* Success Message */}
          {successMessage && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Account Created! Redirecting to sign-in page...
            </Alert>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

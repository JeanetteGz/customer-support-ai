"use client";
import { Box, Stack, Typography, Button, Container, CssBaseline, TextField } from '@mui/material';

export default function SignInPage() {
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
            Sign In to Your Account
          </Typography>
          <Typography variant="h6" color="#333C4D" paragraph>
            Access your personal AI Nutrition/Fitness Coach by signing in with your email.
          </Typography>
          
          {/* Sign-In Form */}
          <Stack spacing={2} width="100%">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ borderRadius: '16px' }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{ borderRadius: '16px' }}
            />
            <Button
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
              Sign In
            </Button>
          </Stack>
          
          {/* Sign-Up Option */}
          <Typography variant="h6" color="#333C4D" paragraph>
            Don't have an account?
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
            href="/signup" // Redirect URL for sign-up
          >
            Sign Up
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}


"use client";
import { Box, Stack, Typography, Button, Container, CssBaseline } from '@mui/material';

export default function Landing() {
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
            Welcome to Your AI Nutrition/Fitness Coach
          </Typography>
          <Typography variant="h5" color="#333C4D" paragraph>
            Transform your health journey with personalized nutrition and fitness guidance. Our AI coach is here to provide you with expert advice and support tailored to your goals.
          </Typography>

          <Stack spacing={2} direction="row" justifyContent="center">

            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: '#333C4D',
                backgroundColor: '#333C4D',
                borderRadius: '16px',
                padding: '10px 20px',
                fontSize: '16px',
                '&:hover': {
                  borderColor: '#2a2f3e',
                  backgroundColor: '#001B2E',
                },
              }}
              href="/signin"
            >
              Sign In
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: '#333C4D',
                backgroundColor: '#333C4D',
                borderRadius: '16px',
                padding: '10px 20px',
                fontSize: '16px',
                '&:hover': {
                  borderColor: '#2a2f3e',
                  backgroundColor: '#001B2E',
                },
              }}
              href="/signup"
            >
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}


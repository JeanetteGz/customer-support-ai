// app/chatbot/page.js
"use client";
import { Box, Stack, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { SignedIn, SignedOut, RedirectToSignIn, useClerk } from '@clerk/nextjs';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: `Hi! I am your personal AI Nutrition/Fitness Coach. How can I assist you today?`,
  }]);

  const [message, setMessage] = useState('');
  const { signOut } = useClerk();

  const sendMessage = async () => {
    setMessage('');
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message },
      { role: 'assistant', content: '' }
    ]);

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...messages, { role: "user", content: message }]),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    reader.read().then(function processText({ done, value }) {
      if (done) {
        return result;
      }
      const text = decoder.decode(value || new Uint8Array(), { stream: true });
      setMessages((messages) => {
        let lastMessage = messages[messages.length - 1];
        let otherMessages = messages.slice(0, messages.length - 1);

        return [
          ...otherMessages,
          { ...lastMessage, content: lastMessage.content + text },
        ];
      });
      return reader.read().then(processText);
    });
  };

  const handleLogout = () => {
    signOut().then(() => {
      window.location.href = '/landing'; // Redirect to the landing page after logout
    });
  };

  return (
    <>
      <SignedIn>
        <Box
          width="100vw"
          height="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="#F0F4F8"
          padding={2}
        >
          <Stack
            direction="column"
            width="600px"
            height="700px"
            border="1px solid #333C4D"
            borderRadius="16px"
            padding={2}
            spacing={3}
            bgcolor="white"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          >
            <Stack direction="row" justifyContent="flex-end">
              <Button 
                variant="outlined" 
                onClick={handleLogout}
                style={{ borderRadius: 16, color: '#333C4D', borderColor: '#333C4D' }}
              >
                Logout
              </Button>
            </Stack>
            <Typography variant="h4" color="#333C4D" fontWeight="bold" alignItems="center">
              Chat with Your Personal AI Coach
            </Typography>
            <Stack
              direction="column"
              spacing={2}
              flexGrow={1}
              overflow="auto"
              maxHeight="100%"
            >
              {messages.map((message, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent={message.role === 'assistant' ? 'flex-start' : 'flex-end'}
                  padding={1}
                >
                  <Box
                    bgcolor={message.role === 'assistant' ? '#333C4D' : '#007BFF'}
                    color="white"
                    borderRadius="16px"
                    padding={2}
                    maxWidth="80%"
                    boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                  >
                    {message.content}
                  </Box>
                </Box>
              ))}
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField
                label="Message"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variant="outlined"
                size="small"
                InputProps={{
                  style: { borderRadius: 16 },
                }}
              />
              <Button 
                variant="contained" 
                onClick={sendMessage}
                style={{ borderRadius: 16, backgroundColor: '#333C4D' }}
              >
                Send
              </Button>
            </Stack>
          </Stack>
        </Box>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

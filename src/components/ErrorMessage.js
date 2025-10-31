import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
      }}
    >
      <Paper
        sx={{
          p: 4,
          maxWidth: '500px',
          textAlign: 'center',
          backgroundColor: 'rgba(15, 15, 25, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          boxShadow: '0 8px 32px rgba(239, 68, 68, 0.2)',
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: 80,
            color: 'rgba(255, 69, 58, 0.8)',
            mb: 2,
          }}
        />
        
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: 'white',
            mb: 2,
          }}
        >
          Oops! Something went wrong
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 3,
          }}
        >
          {message}
        </Typography>
        
        {onRetry && (
          <Button
            variant="contained"
            startIcon={<RefreshIcon />}
            onClick={onRetry}
            sx={{
              background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              color: 'white',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #4f46e5 0%, #db2777 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.5), 0 0 20px rgba(236, 72, 153, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Try Again
          </Button>
        )}
      </Paper>
    </Box>
  );
};

export default ErrorMessage;

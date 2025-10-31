import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        gap: 3,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          size={80}
          thickness={4}
          sx={{
            color: '#6366f1',
            filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.5))',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress
            size={60}
            thickness={4}
            sx={{
              color: '#ec4899',
              filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.5))',
            }}
            variant="indeterminate"
          />
        </Box>
      </Box>
      
      <Typography
        variant="h6"
        sx={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        Loading Users...
      </Typography>
      
      <Typography
        variant="body2"
        sx={{
          color: 'rgba(255, 255, 255, 0.5)',
          textAlign: 'center',
        }}
      >
        Please wait while we fetch the data
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Header = () => {
  return (
    <Box
      sx={{
        background: 'rgba(10, 10, 15, 0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
        py: 3,
        position: 'relative',
        zIndex: 10,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              borderRadius: '16px',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4), 0 0 20px rgba(236, 72, 153, 0.3)',
            }}
          >
            <PeopleAltIcon sx={{ fontSize: 32, color: 'white' }} />
          </Box>
          
          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              User Dashboard
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                mt: 0.5,
              }}
            >
              Modern & Responsive User Management System
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;

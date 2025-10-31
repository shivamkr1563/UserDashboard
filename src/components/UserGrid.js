import React from 'react';
import { Box, Typography, Fade } from '@mui/material';
import UserCard from './UserCard';
import UserTable from './UserTable';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const UserGrid = ({ users, viewMode, searchQuery }) => {
  if (users.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          textAlign: 'center',
          gap: 2,
        }}
      >
        <SentimentDissatisfiedIcon 
          sx={{ 
            fontSize: 80, 
            color: 'rgba(255, 255, 255, 0.3)' 
          }} 
        />
        <Typography 
          variant="h5" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: 600 
          }}
        >
          No users found
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.5)' 
          }}
        >
          {searchQuery 
            ? `No results for "${searchQuery}". Try a different search term.`
            : 'There are no users to display.'}
        </Typography>
      </Box>
    );
  }

  if (viewMode === 'table') {
    return (
      <Fade in timeout={500}>
        <Box>
          <UserTable users={users} />
        </Box>
      </Fade>
    );
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: 3,
      }}
    >
      {users.map((user, index) => (
        <Fade 
          in 
          timeout={500} 
          style={{ transitionDelay: `${index * 50}ms` }}
          key={user.id}
        >
          <Box>
            <UserCard user={user} />
          </Box>
        </Fade>
      ))}
    </Box>
  );
};

export default UserGrid;

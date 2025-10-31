import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';

const UserTable = ({ users }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (id) => {
    const colors = [
      'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
      'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    ];
    return colors[id % colors.length];
  };

  if (isMobile) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {users.map((user) => (
          <Paper
            key={user.id}
            sx={{
              p: 2,
              backgroundColor: 'rgba(15, 15, 25, 0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  background: getAvatarColor(user.id),
                  fontWeight: 700,
                }}
              >
                {getInitials(user.name)}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {user.name}
                </Typography>
                <Chip
                  label={`@${user.username}`}
                  size="small"
                  sx={{
                    mt: 0.5,
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 600,
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.5)' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  {user.email}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.5)' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  {user.phone.split(' ')[0]}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <BusinessIcon sx={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.5)' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  {user.company.name}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    );
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: 'rgba(15, 15, 25, 0.7)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)',
              '& th': {
                fontWeight: 700,
                color: 'white',
                borderBottom: '2px solid rgba(99, 102, 241, 0.3)',
              },
            }}
          >
            <TableCell>User</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.2)',
                },
                '& td': {
                  borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
                  color: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      background: getAvatarColor(user.id),
                      fontSize: '0.875rem',
                      fontWeight: 700,
                    }}
                  >
                    {getInitials(user.name)}
                  </Avatar>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {user.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
                    >
                      @{user.username}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone.split(' ')[0]}</TableCell>
              <TableCell>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {user.company.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontStyle: 'italic' 
                    }}
                  >
                    {user.company.catchPhrase}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>{user.address.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;

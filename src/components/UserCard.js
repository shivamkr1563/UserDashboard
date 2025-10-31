import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Chip,
  IconButton,
  Collapse,
  Divider,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const UserCard = ({ user }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
      'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
    ];
    return colors[id % colors.length];
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Avatar
            sx={{
              width: 80,
              height: 80,
              background: getAvatarColor(user.id),
              fontSize: '1.5rem',
              fontWeight: 700,
              mb: 2,
              boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4), 0 0 20px rgba(236, 72, 153, 0.3)',
            }}
          >
            {getInitials(user.name)}
          </Avatar>

          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: 0.5,
            }}
          >
            {user.name}
          </Typography>

          <Chip
            label={`@${user.username}`}
            size="small"
            sx={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 600,
              border: '1px solid rgba(99, 102, 241, 0.4)',
              boxShadow: '0 2px 8px rgba(99, 102, 241, 0.2)',
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon sx={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.5)' }} />
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.875rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {user.email}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon sx={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.5)' }} />
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.875rem',
              }}
            >
              {user.phone.split(' ')[0]}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <BusinessIcon sx={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.5)' }} />
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.875rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {user.company.name}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          <IconButton
            onClick={handleExpandClick}
            sx={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider sx={{ my: 2, borderColor: 'rgba(99, 102, 241, 0.2)' }} />
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <LocationOnIcon sx={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.5)', mt: 0.2 }} />
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                }}
              >
                {user.address.street}, {user.address.suite}<br />
                {user.address.city}, {user.address.zipcode}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LanguageIcon sx={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.5)' }} />
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.875rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {user.website}
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 1,
                p: 2,
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                borderRadius: 2,
                border: '1px solid rgba(99, 102, 241, 0.2)',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                Company Tagline
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                  mt: 0.5,
                }}
              >
                "{user.company.catchPhrase}"
              </Typography>
            </Box>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default UserCard;

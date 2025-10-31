import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';

const SearchBar = ({ 
  searchQuery, 
  onSearchChange, 
  viewMode, 
  onViewModeChange,
  onRefresh,
  resultsCount 
}) => {
  const handleClear = () => {
    onSearchChange('');
  };

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      onViewModeChange(newView);
    }
  };

  return (
    <Box
      sx={{
        mb: 4,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
        alignItems: { xs: 'stretch', md: 'center' },
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ flex: 1, maxWidth: { md: '600px' } }}>
        <TextField
          fullWidth
          placeholder="Search by name, username, email, or company..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
              </InputAdornment>
            ),
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClear}
                  size="small"
                  sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              backgroundColor: 'rgba(15, 15, 25, 0.7)',
              backdropFilter: 'blur(20px)',
              borderRadius: '12px',
              '& fieldset': {
                border: '1px solid rgba(99, 102, 241, 0.3)',
              },
              '&:hover fieldset': {
                border: '1px solid rgba(99, 102, 241, 0.5)',
              },
              '&.Mui-focused fieldset': {
                border: '2px solid #6366f1',
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
              },
            },
          }}
          sx={{
            '& .MuiInputBase-input': {
              color: 'white',
              '&::placeholder': {
                color: 'rgba(255, 255, 255, 0.5)',
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Chip
          label={`${resultsCount} ${resultsCount === 1 ? 'User' : 'Users'}`}
          sx={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
            color: 'white',
            fontWeight: 600,
            border: '1px solid rgba(99, 102, 241, 0.4)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
          }}
        />

        <Tooltip title="Refresh Data">
          <IconButton
            onClick={onRefresh}
            sx={{
              backgroundColor: 'rgba(15, 15, 25, 0.7)',
              color: 'white',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              '&:hover': {
                backgroundColor: 'rgba(99, 102, 241, 0.3)',
                transform: 'rotate(180deg)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
              },
            }}
          >
            <RefreshIcon />
          </IconButton>
        </Tooltip>

        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={handleViewChange}
          aria-label="view mode"
          sx={{
            backgroundColor: 'rgba(15, 15, 25, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            '& .MuiToggleButton-root': {
              color: 'rgba(255, 255, 255, 0.6)',
              border: 'none',
              '&.Mui-selected': {
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                color: 'white',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #4f46e5 0%, #db2777 100%)',
                },
              },
              '&:hover': {
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
              },
            },
          }}
        >
          <ToggleButton value="grid" aria-label="grid view">
            <Tooltip title="Grid View">
              <GridViewIcon />
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="table" aria-label="table view">
            <Tooltip title="Table View">
              <TableRowsIcon />
            </Tooltip>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default SearchBar;

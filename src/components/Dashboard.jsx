import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerClose = () => setOpen(false);
  const handleMenuClick = () => setOpen(!open);
  const handleThemeToggle = () => {
    // Implement theme toggle functionality
  };
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <div style={{ marginLeft: open ? 240 : 0, transition: 'margin-left 0.3s' }}>
        <Header
          onMenuClick={handleMenuClick}
          onThemeToggle={handleThemeToggle}
          anchorEl={anchorEl}
          handleMenuClose={handleMenuClose}
        />
        <main style={{ padding: '20px' }}>
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;

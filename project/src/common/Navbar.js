import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/dashboard';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Dashboard
        </Typography>
        <Button color="inherit" component={Linknpm } to="/">
          <DashboardIcon style={{ marginRight: 8 }} /> Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/settings">
          <SettingsIcon style={{ marginRight: 8 }} /> Settings
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
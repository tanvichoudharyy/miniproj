import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/">
          <DashboardIcon style={{ marginRight: 8 }} /> Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
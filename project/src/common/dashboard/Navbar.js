import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="navbar-title">
          My Dashboard
        </Typography>
        <TextField 
          placeholder="Search..."
          variant="outlined"
          size="small"
          className="navbar-search"
        />
        <div className="navbar-buttons">
          <Button color="inherit" component={Link} to="/">
            <DashboardIcon className="navbar-icon" /> Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/logout">
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
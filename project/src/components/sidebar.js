import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Add styles for Sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/dashboard/profile">Profile</Link></li>
        <li><Link to="/dashboard/settings">Settings</Link></li>
        <li><Link to="/dashboard/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
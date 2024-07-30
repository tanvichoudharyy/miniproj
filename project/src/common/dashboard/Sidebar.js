import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Add styles for Sidebar

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <ul className="sidebar-menu">
        <li className={location.pathname === '/dashboard' ? 'active' : ''}>
          <Link to="/dashboard">Home</Link>
        </li>
        <li className={location.pathname === '/dashboard/profile' ? 'active' : ''}>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        <li className={location.pathname === '/dashboard/settings' ? 'active' : ''}>
          <Link to="/dashboard/settings">Settings</Link>
        </li>
        <li className={location.pathname === '/dashboard/logout' ? 'active' : ''}>
          <Link to="/dashboard/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
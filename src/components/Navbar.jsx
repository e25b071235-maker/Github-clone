import React from 'react';
import { Bell, Plus, ChevronDown } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="nav-logo">
          <FaGithub size={32} />
        </a>
        <div className="nav-search">
          <input type="text" placeholder="Search or jump to..." />
        </div>
        <div className="nav-links">
          <a href="#">Pull requests</a>
          <a href="#">Issues</a>
          <a href="#">Marketplace</a>
          <a href="#">Explore</a>
        </div>
        <div className="nav-actions">
          <Bell size={16} color="white" />
          <div style={{ display: 'flex', alignItems: 'center', color: 'white', gap: '4px' }}>
            <Plus size={16} /> <ChevronDown size={14} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', color: 'white', gap: '4px' }}>
            <img 
              src="https://avatars.githubusercontent.com/u/9919?s=40&v=4" 
              alt="Profile" 
              style={{ width: '20px', height: '20px', borderRadius: '50%' }}
            />
            <ChevronDown size={14} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

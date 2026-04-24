import React, { useState } from 'react';
import { Users, Star, MapPin, Link as LinkIcon } from 'lucide-react';
import { FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <aside className="sidebar">
      <img 
        src="https://avatars.githubusercontent.com/u/9919?v=4" 
        alt="Avatar" 
        className="profile-avatar"
      />
      <div className="profile-names">
        <h1>GitHub</h1>
        <h2>github</h2>
      </div>
      
      <div className="profile-bio">
        How people build software.
      </div>
      
      <button 
        className={`btn follow-btn ${isFollowing ? 'btn-primary' : ''}`}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
      
      <div className="profile-stats">
        <Users size={16} />
        <span>38.2k</span> followers · <span>0</span> following · <Star size={16} /> <span>14</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={16} color="var(--text-muted)" />
          <span>Pune, India</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LinkIcon size={16} color="var(--text-muted)" />
          <a href="#">github.com</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaTwitter size={16} color="var(--text-muted)" />
          <a href="#">@github</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

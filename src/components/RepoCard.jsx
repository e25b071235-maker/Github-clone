import React from 'react';
import { Star, GitFork } from 'lucide-react';

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
      <div className="repo-info">
        <div className="repo-title">
          <a href="#">{repo.name}</a>
          <span className="repo-badge">{repo.badge}</span>
        </div>
        <div className="repo-desc">
          {repo.description}
        </div>
        <div className="repo-meta">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span 
              className="repo-lang-color" 
              style={{ backgroundColor: repo.langColor }}
            ></span>
            {repo.language}
          </div>
          {repo.stars > 0 && (
            <a href="#" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={14} /> {repo.stars >= 1000 ? (repo.stars/1000).toFixed(1) + 'k' : repo.stars}
            </a>
          )}
          {repo.forks > 0 && (
            <a href="#" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <GitFork size={14} /> {repo.forks >= 1000 ? (repo.forks/1000).toFixed(1) + 'k' : repo.forks}
            </a>
          )}
          <span>{repo.updatedAt}</span>
        </div>
      </div>
      <div className="repo-actions">
        <button className="btn star-btn">
          <Star size={14} /> Star
        </button>
        <div style={{ height: '30px' }}></div> {/* Spacer for alignment */}
      </div>
    </div>
  );
};

export default RepoCard;

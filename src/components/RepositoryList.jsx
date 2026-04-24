import React, { useState } from 'react';
import { Book } from 'lucide-react';
import RepoCard from './RepoCard';

const RepositoryList = ({ repos, setRepos }) => {
  const [newRepo, setNewRepo] = useState('');

  const addRepo = (e) => {
    e.preventDefault();
    if (!newRepo.trim()) return;
    const repo = {
      id: Date.now(),
      name: newRepo.toLowerCase().replace(/\s+/g, '-'),
      description: 'A new repository created locally.',
      language: 'JavaScript',
      langColor: '#f1e05a',
      stars: 0,
      forks: 0,
      updatedAt: 'Just now',
      badge: 'Public'
    };
    setRepos([repo, ...repos]);
    setNewRepo('');
  };

  return (
    <div>
      <div className="repo-filters">
        <input type="text" placeholder="Find a repository..." />
        <button className="btn">Type</button>
        <button className="btn">Language</button>
        <button className="btn">Sort</button>
      </div>
      <div className="repo-filters" style={{ marginTop: '16px', display: 'flex', gap: '16px' }}>
        <form onSubmit={addRepo} style={{ display: 'flex', gap: '16px', flex: 1, maxWidth: '500px' }}>
          <input 
            type="text" 
            placeholder="New repository name..." 
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            <Book size={16} /> New
          </button>
        </form>
      </div>

      <div className="repo-list">
        {repos.map(repo => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;

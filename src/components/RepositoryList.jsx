import React from 'react';
import RepoCard from './RepoCard';
import AddRepository from './AddRepository';

const RepositoryList = ({ repos, setRepos }) => {
  const handleAddRepo = (newRepo) => {
    setRepos([newRepo, ...repos]);
  };

  return (
    <div>
      <AddRepository onAdd={handleAddRepo} />

      <div className="repo-filters">
        <input type="text" placeholder="Find a repository..." className="form-input" style={{ flex: 1 }} />
        <button className="btn">Type</button>
        <button className="btn">Language</button>
        <button className="btn">Sort</button>
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

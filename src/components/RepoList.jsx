import React, { useState } from 'react';
import { Book, Code, Package, Star, Layout } from 'lucide-react';
import Overview from './Overview';
import RepositoryList from './RepositoryList';
import ProjectList from './ProjectList';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialRepos, initialProjects } from '../data/initialData';

const RepoList = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [repos, setRepos] = useLocalStorage('github-clone-repos', initialRepos);
  const [projects, setProjects] = useLocalStorage('github-clone-projects', initialProjects);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview repos={repos} />;
      case 'repositories':
        return <RepositoryList repos={repos} setRepos={setRepos} />;
      case 'projects':
        return <ProjectList projects={projects} setProjects={setProjects} />;
      default:
        return <div style={{ padding: '32px', textAlign: 'center' }}>Coming soon...</div>;
    }
  };

  return (
    <div className="repo-container">
      <div className="repo-tabs">
        <div 
          className={`repo-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <Book size={16} /> Overview
        </div>
        <div 
          className={`repo-tab ${activeTab === 'repositories' ? 'active' : ''}`}
          onClick={() => setActiveTab('repositories')}
        >
          <Code size={16} /> Repositories <span className="repo-tab-count">{repos.length}</span>
        </div>
        <div 
          className={`repo-tab ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <Layout size={16} /> Projects <span className="repo-tab-count">{projects.length}</span>
        </div>
        <div 
          className={`repo-tab ${activeTab === 'packages' ? 'active' : ''}`}
          onClick={() => setActiveTab('packages')}
        >
          <Package size={16} /> Packages
        </div>
        <div 
          className={`repo-tab ${activeTab === 'stars' ? 'active' : ''}`}
          onClick={() => setActiveTab('stars')}
        >
          <Star size={16} /> Stars <span className="repo-tab-count">14</span>
        </div>
      </div>

      {renderContent()}
    </div>
  );
};

export default RepoList;

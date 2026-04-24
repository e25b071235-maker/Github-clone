import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RepoList from './components/RepoList';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="container main-content">
        <Sidebar />
        <RepoList />
      </div>
    </div>
  );
}

export default App;

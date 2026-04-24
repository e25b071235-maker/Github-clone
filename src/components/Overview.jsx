import React from 'react';

const Overview = ({ repos }) => {
  const pinnedRepos = repos.slice(0, 4); // Show top 4

  return (
    <div className="overview-container">
      <div style={{ border: '1px solid var(--border-color)', borderRadius: '6px', padding: '24px', marginBottom: '24px', backgroundColor: 'var(--bg-color)' }}>
        <h3 style={{ marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', fontWeight: '500' }}>
          ayush / README.md
        </h3>
        <div style={{ lineHeight: '1.6' }}>
          <p style={{ marginBottom: '16px' }}>👋 Hi, I'm Ayush!</p>
          <p style={{ marginBottom: '16px' }}>🚀 I'm a passionate developer currently working on the WAP Group Project.</p>
          <p style={{ marginBottom: '16px' }}>🌱 I'm currently learning Advanced React, UI design, and state management.</p>
          <p>📫 How to reach me: ayush@example.com</p>
        </div>
      </div>
      
      <div style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '500' }}>Pinned</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {pinnedRepos.map(repo => (
          <div key={repo.id} style={{ border: '1px solid var(--border-color)', borderRadius: '6px', padding: '16px', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <a href="#" style={{ fontWeight: '600', fontSize: '14px' }}>{repo.name}</a>
              <span className="repo-badge">{repo.badge}</span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px', flex: 1 }}>{repo.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', color: 'var(--text-muted)', gap: '16px' }}>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                 <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: repo.langColor, display: 'inline-block', marginRight: '4px' }}></span>
                 {repo.language}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;

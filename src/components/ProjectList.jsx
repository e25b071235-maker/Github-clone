import React, { useState } from 'react';
import { Layout } from 'lucide-react';

const ProjectList = ({ projects, setProjects }) => {
  const [newProject, setNewProject] = useState('');

  const addProject = (e) => {
    e.preventDefault();
    if (!newProject.trim()) return;
    const project = {
      id: Date.now(),
      name: newProject,
      status: 'Todo',
      updated: 'Just now',
      number: projects.length + 1
    };
    setProjects([project, ...projects]);
    setNewProject('');
  };

  return (
    <div className="project-container">
      <div className="repo-filters" style={{ justifyContent: 'space-between' }}>
        <form onSubmit={addProject} style={{ display: 'flex', gap: '16px', flex: 1, maxWidth: '500px' }}>
          <input 
            type="text" 
            placeholder="New project name..." 
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Create Project</button>
        </form>
      </div>

      <div style={{ border: '1px solid var(--border-color)', borderRadius: '6px', overflow: 'hidden' }}>
        <div style={{ backgroundColor: 'var(--header-bg)', padding: '16px', borderBottom: '1px solid var(--border-color)', fontWeight: '600', fontSize: '14px' }}>
          {projects.length} Open projects
        </div>
        {projects.length === 0 ? (
          <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)' }}>
            No projects found. Create one above!
          </div>
        ) : (
          projects.map((proj, idx) => (
            <div key={proj.id} style={{ padding: '16px', borderBottom: idx !== projects.length - 1 ? '1px solid var(--border-color)' : 'none', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Layout size={16} color="var(--text-muted)" />
              <div style={{ flex: 1 }}>
                <a href="#" style={{ fontWeight: '600', fontSize: '16px' }}>{proj.name}</a>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  #{proj.number} updated {proj.updated}
                </div>
              </div>
              <div style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '20px', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                {proj.status}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectList;

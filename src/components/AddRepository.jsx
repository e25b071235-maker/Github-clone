import React, { useState } from 'react';
import { Book } from 'lucide-react';

const AddRepository = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    onAdd({
      id: Date.now(),
      name: name.toLowerCase().replace(/\s+/g, '-'),
      description: description || 'A new repository created locally.',
      language: 'JavaScript',
      langColor: '#f1e05a',
      stars: 0,
      forks: 0,
      updatedAt: 'Just now',
      badge: 'Public'
    });
    
    setName('');
    setDescription('');
  };

  return (
    <div style={{ padding: '24px', border: '1px solid var(--border-color)', borderRadius: '6px', marginBottom: '24px', backgroundColor: 'var(--bg-color)' }}>
      <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Create a new repository</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600' }}>Repository name <span style={{ color: '#f85149' }}>*</span></label>
          <input 
            type="text" 
            className="form-input"
            placeholder="e.g. hello-world" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', maxWidth: '300px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600' }}>Description <span style={{ fontWeight: 'normal', color: 'var(--text-muted)' }}>(optional)</span></label>
          <input 
            type="text" 
            className="form-input"
            placeholder="Short description of your project" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '8px' }}>
          <button type="submit" className="btn btn-primary">
            <Book size={16} /> Create repository
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRepository;

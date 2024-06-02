import React from 'react';
import '../css/Projects.css';

function Projects() {
  return (
    <section id="projects">
    <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
        <h3>UCBL Internet Banking (Unet)</h3>
        <p>Developed new features and solved production issues. Backend Developer.</p>
        <a href="#" className="project-link">View Details</a>
        </div>
        <div className="project-card">
        <h3>ABBL Internet Banking (ABDirect)</h3>
        <p>Revamped the legacy project with brand new technologies. Backend Developer.</p>
        <a href="#" className="project-link">View Details</a>
        </div>
      </div>
    
    </section>
  );
}

export default Projects;

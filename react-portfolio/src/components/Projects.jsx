import React from 'react';
import '../css/Projects.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>UCBL Internet Banking (Unet)</h3>
          <p>Developed new features for the project and solved production issues. Backend Developer.</p>
        </div>
        <div className="project-item">
          <h3>ABBL Internet Banking (ABDirect)</h3>
          <p>Revamped the legacy project with brand new technologies. Backend Developer.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

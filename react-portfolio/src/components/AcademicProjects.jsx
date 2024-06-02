import React from 'react';
import '../css/AcademicProjects.css';

function AcademicProjects() {
  return (
    <section id="academic-projects">
      <h2>Academic Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Medaid</h3>
          <p>Built With React, NodeJs, Express, MongoDB. Website where patients can input their symptoms and get doctor recommendations.</p>
        </div>
        <div className="project-item">
          <h3>Angry Spartan</h3>
          <p>A C++ SFML 2D Platformer Game. Multi-level game built without any frameworks only using SFML library.</p>
        </div>
      </div>
    </section>
  );
}

export default AcademicProjects;

import React from 'react';
import '../css/WorkExperience.css';

function WorkExperience() {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>
      <div className="experience">
        <h3>Associate Software Engineer</h3>
        <p>Brain Station 23</p>
        <p><strong>March 2023 - Present</strong></p>
        <ul>
          <li>Java Spring Boot</li>
          <li>Worked in Fintech Unit’s Internet Banking Projects</li>
          <li>Worked with both legacy and brand new technologies</li>
          <li>Experienced development with Kubernetes, Kafka, Redis, SonarQube</li>
        </ul>
      </div>
    </section>
  );
}

export default WorkExperience;

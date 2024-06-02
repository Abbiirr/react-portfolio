import React from 'react';
import '../css/Education.css';

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-item">
        <h3>BSc in Software Engineering</h3>
        <p>Islamic University of Technology</p>
        <p><strong>Jan 2020 - May 2024</strong></p>
        <p>CGPA: 3.54/4.0</p>
      </div>
      <div className="education-item">
        <h3>HSC</h3>
        <p>Government Science College</p>
        <p><strong>July 2017 - May 2019</strong></p>
        <p>GPA: 5.0/5.0</p>
      </div>
    </section>
  );
}

export default Education;

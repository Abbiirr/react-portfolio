import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import AcademicProjects from './components/AcademicProjects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Summary />
        <WorkExperience />
        <Education />
        <Projects />
        <AcademicProjects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

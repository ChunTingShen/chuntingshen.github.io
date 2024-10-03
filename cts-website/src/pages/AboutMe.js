// src/pages/AboutMe.js
import React from 'react';
import './AboutMe.css';
import EducationalBackground from './Background';
import WorkExperience from './WorkExperience';
import Skills from './Skills';


const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
        <p>
            Hi, I'm Chun-Ting Shen 沈俊廷, a Full-Stack Engineer and Data Analyst with expertise in Python, SQL, and TypeScript frameworks using Angular and React.
            I enjoy solving problems with data and building applications that provide solutions and insights.
        </p>

        <p>
            I am interested in: Software Development, Data Visualization, Experiment Design, and Behavioral Economics Research. 
        </p>
        
        <p>
            Currently live in New York City. I love cycling and pickleball. You might find me jogging by the Hudson River occasionally.        
        </p>

        <div className="photo-container">
          <img src="/img/cts_0925.jpg" alt="Error loading" className="profile-photo" />
        </div>

        <EducationalBackground />
        <WorkExperience />
        <Skills />

    </section>
  );
};

export default AboutMe;

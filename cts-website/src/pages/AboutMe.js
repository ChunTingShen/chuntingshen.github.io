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
            Hi, I'm Chun-Ting Shen 沈俊廷, a full-stack engineer and data analyst with experience in Python, SQL, and JavaScript frameworks using Angular and React.
            I enjoy solving problems with data and building applications that provide insights and solutions.
        </p>

        <p>
            New York University Graduate (2022) with a Masters degree in Information Systems.
        </p> 
        
        <p>
            I currently live in New York City.
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

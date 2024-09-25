// src/pages/AboutMe.js
import React from 'react';
import './AboutMe.css';



const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
        <p>
        Hi, I'm Chun-Ting Shen 沈俊廷, a full-stack engineer and data analyst with experience in Python, SQL, and JavaScript frameworks like Angular.
        I enjoy solving problems with data and building applications that provide insights and solutions.
        </p>

        <p>
            New York University Graduate (2022) with a Masters degree in Information Systems.
        </p> 
        
        <p>
            I currently live in New York City.
        </p>


        <section className="skills">
        <h2>Skills</h2>
        <div className="skill-bar">
            <div className="skill" style={{ width: '90%' }}>JavaScript</div>
        </div>
        <div className="skill-bar">
            <div className="skill" style={{ width: '87%' }}>Python</div>
        </div>
        <div className="skill-bar">
            <div className="skill" style={{ width: '90%' }}>Angular</div>
        </div>
        <div className="skill-bar">
            <div className="skill" style={{ width: '75%' }}>SQL</div>
        </div>
        <div className="skill-bar">
            <div className="skill" style={{ width: '80%' }}>Data Analysis</div>
        </div>
        </section>
    </section>
  );
};

export default AboutMe;

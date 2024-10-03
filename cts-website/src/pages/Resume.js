import React from 'react';
import resumePDF from '../assets/CV_Chun-Ting_Shen.pdf'; // Assuming resume.pdf is stored in the assets folder

const Resume = () => {
  return (
    <section id="resume-page">
      
      <div className="resume-preview">
        <iframe 
          src={resumePDF} 
          width="100%" 
          height="1090px" 
          title="Resume Preview"
        >
        </iframe>
      </div>
      
      <div className="resume-download">
        <a href={resumePDF} download="JohnDoe_Resume.pdf" className="btn">
          Download Resume 
        </a> 
        <p>last update: 2024/10/1</p>
      </div> 
    </section>
  );
};

export default Resume;

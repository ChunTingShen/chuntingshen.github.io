// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">

    <h2>Contact Me</h2>
        <div>
        <p>Email: <a href="mailto:morrisshen25@gmail.com">morrisshen25@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/chuntingshen/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        {/* New Resume Download Section */}
        <div className="resume-section">
            <a href="/CV_Chun-Ting_Shen.pdf" download>
            <button>Download Resume</button>
            </a>
        </div>
        </div>
        
    </section>
  );
};

export default Contact;

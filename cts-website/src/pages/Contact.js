// src/pages/Contact.js
import React, { useState } from 'react';
import ContactMe from './ContactMe';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">

    <h2>Contact Me</h2>
        <div>
        <p>Email: <a href="mailto:morrisshen25@gmail.com">morrisshen25@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/chuntingshen/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p>Resume: <a href="/files/CV_Chun-Ting_Shen.pdf">Download</a></p>
        <ContactMe />
        </div>
        
    </section>
  );
};

export default Contact;

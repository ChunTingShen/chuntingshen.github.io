// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';
import ContactMe from './ContactMe';
import IG from "../assets/ig.png";
import LinkedIn from "../assets/LI-In-Bug.png";
import strava from "../assets/strava.svg";



const Contact = () => {
  return (
    <section id="contact" className="contact-section">

    <h2>Contact Me</h2>
        <div>
        <p>Email: <a href="mailto:morrisshen25@gmail.com">morrisshen25@gmail.com</a></p>
        <p>Resume: <a href="/files/CV_Chun-Ting_Shen.pdf">Download</a></p>

        <p>Social:
        <a class="social-network" href="https://www.linkedin.com/in/chuntingshen/"><img src={LinkedIn}></img></a>
        <a class="social-network" href="https://www.strava.com/athletes/147699040"><img src={strava} ></img></a>
        <a class="social-network" href="https://www.instagram.com/morrisshen7/"><img src={IG}></img></a>
        </p>

        </div>
        
    </section>
  );
};

export default Contact;

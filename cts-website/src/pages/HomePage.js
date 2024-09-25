// src/pages/AboutMe.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();
    const handleLearnMore = () => {
        navigate('/about');
    }

    return (
    <section id="about" className="home-section">
        <h1>
            Welcome! 
        </h1>

        <button onClick={handleLearnMore}>Learn more about me</button>

    </section>
  );
};

export default HomePage;

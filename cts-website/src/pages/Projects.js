// src/pages/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      
        <h2>Projects and Achievements</h2>
        <ul>
        <li><strong>Behavioral Economics Research:</strong> Designed and conducted a marketing experiment on wine coupons to analyze consumer behavior on random lottery, risk behavior, and the impact of discounts over time. Collaborated with Prof. Patrick DeJarnette and graduate students to manage experiment design, and data analysis (Python, R, Stata).</li>
        <li><strong>Robothon Trading Platform (NYU Info Tech Project with Citi):</strong> Refactored a trading platform to containerize and test submitted bots using Python, Docker, InfluxDB, and RabbitMQ. Followed behavioral-driven development (BDD) principles, conducted tests for invalid Python input, and created pre-submission Python scripts to detect invalid trading algorithms.</li>
        <li><strong>Data Science for Business (NYU Stern Project):</strong>Developed sales prediction models using scikit-learn (logistic regression, k-Means, KNN, and Naïve Bayes). Extracted and structured data from the Spotify music database using SQL and Python, achieving 3rd place in the course competition for model fine-tuning.</li>
        <li><strong>WorldQuant International Quant Championship:</strong> Won second place in Taiwan final stage with outstanding out-sample performance and Alpha strategies counts. </li>
        <li><strong>Consulting Club, National Taiwan University:</strong> Collaborated with Boston Consulting Group consultants to introduce social media forums into local financial services, resulting in a potential 20% increase in online banking customers.</li>
        <li><strong>Social Science Students Association, National Taiwan University:</strong> Established the first online database of guidelines for acquiring a double degree or minor degree, enhancing academic resource accessibility for students.</li>
        
        </ul>
    </section>
  );
};

export default Projects;

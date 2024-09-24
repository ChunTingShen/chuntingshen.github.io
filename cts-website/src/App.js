import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chun-Ting Shen</h1>
        <nav>
          <a href="#about">About Me</a> | <a href="#projects">Projects</a> | <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hi, I'm Chun-Ting Shen 沈俊廷, a full-stack engineer and data analyst with experience in Python, SQL, and JavaScript frameworks like Angular.
          I enjoy solving problems with data and building applications that provide insights and solutions.
        </p>

        <p>
          I graduated frmo New York University with a Masters degree in Information Systems. And I currently live in New York City.
          </p>
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects and Achievements</h2>
        <ul>
          <li><strong>Behavioral Economics Research:</strong> Conducted a major marketing experiment on wine coupons.</li>
          <li><strong>Full-Stack Web Application:</strong> Developed a system to manage Google Responsive Search Ads data.</li>
          <li><strong>Data Automation:</strong> Automated data collection for ad campaigns using PostgreSQL and APIs.</li>
        </ul>
      </section>

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

      <footer className="footer">
        <p>© 2024 Chun-Ting Shen</p>
      </footer>
    </div>
  );
}

export default App;

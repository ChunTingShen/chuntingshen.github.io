import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Website</h1>
        <nav>
          <a href="#about">About Me</a> | <a href="#projects">Projects</a> | <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hi, I'm Chun-Ting Shen 沈俊廷, a data analyst and full-stack engineer with experience in Python, SQL, and JavaScript frameworks like Angular.
          I enjoy solving problems with data and building applications that provide insights and solutions.
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
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2024 Chun-Ting Shen</p>
      </footer>
    </div>
  );
}

export default App;

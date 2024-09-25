import React, { useState } from 'react';
import './Skills.css'; // Add styling if necessary

const Skills = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="skills">
    <h2>Skills</h2>

        <div className="skills-section">
        <h3 onClick={() => toggleSection('Programming Languages')} className="section-header">
            Programming Languages {expandedSection === 'Programming Languages' || expandedSection === null ? '-' : '+'}
        </h3>
        {(expandedSection === 'Programming Languages' || expandedSection === null) && (
            <ul className="skills-list">
            <li className="chip">Python</li>
            <li className="chip">JavaScript</li>
            <li className="chip">TypeScript</li>
            <li className="chip">VBA</li>
            <li className="chip">R</li>
            <li className="chip">HTML</li>
            <li className="chip">CSS</li>
            <li className="chip">SQL</li>
            </ul>
        )}
        </div>
        <div className="skills-section">
        <h3 onClick={() => toggleSection('Frameworks & Libraries')} className="section-header">
            Frameworks & Libraries {expandedSection === 'Frameworks & Libraries' || expandedSection === null ? '-' : '+'}
        </h3>
        {(expandedSection === 'Frameworks & Libraries' || expandedSection === null) && (
            <ul className="skills-list">
                <li className="chip">Angular</li>
                <li className="chip">React</li>
                <li className="chip">Express.js</li>
                <li className="chip">Koa</li>
                <li className="chip">pandas</li>
                <li className="chip">Sci-kit Learn</li>
            </ul>
        )}
         </div>

      <div className="skills-section">
        <h3 onClick={() => toggleSection('Databases')} className="section-header">
            Databases {expandedSection === 'Databases' || expandedSection === null ? '-' : '+'}
        </h3>
        {(expandedSection === 'Databases'  || expandedSection === null)&& (
          <ul className="skills-list">
            <li className="chip">PostgreSQL</li>
            <li className="chip">Neo4j</li>
            <li className="chip">MongoDB</li>
            <li className="chip">ElasticSearch</li>
        </ul>
        )}
      </div>

      <div className="skills-section">
        <h3 onClick={() => toggleSection('Data Analysis & Machine Learning')} className="section-header">
          Data Analysis & Machine Learning {expandedSection === 'Data Analysis & Machine Learning' || expandedSection === null ? '-' : '+'}
        </h3>
        {(expandedSection === 'Data Analysis & Machine Learning'  || expandedSection === null)&& (
          <ul className="skills-list">
            <li className="chip">pandas (Python library for data analysis)</li>
            <li className="chip">Sci-kit Learn (Python library for machine learning)</li>
            <li className="chip">psycopg2 (Python library for data pipeline)</li>
            <li className="chip">sqlalchemy (Python library for data pipeline)</li>
            <li className="chip">Stata (Statistical software)</li>
            <li className="chip">R (Data analysis and statistical computing)</li>
            <li className="chip">A/B Testing (Experimentation methodology)</li>
            <li className="chip">Experiment Design (Methodology for research and analysis)</li>
          </ul>
        )}
      </div>

      <div className="skills-section">
        <h3 onClick={() => toggleSection('Tools & Software')} className="section-header">
          Tools & Software {expandedSection === 'Tools & Software' || expandedSection === null ? '-' : '+'}
        </h3>
        {(expandedSection === 'Tools & Software' || expandedSection === null) && (
          <ul className="skills-list">
            <li className="chip">Docker (Containerization)</li>
            <li className="chip">Postman (API Testing)</li>
            <li className="chip">VS Code (Code Editor)</li>
            <li className="chip">DBeaver (Database Management Tool)</li>
            <li className="chip">Git (Version Control System)</li>
          </ul>
        )}
      </div>

      <div className="skills-section">
        <h3 onClick={() => toggleSection('Cloud Platforms')} className="section-header">
          Cloud Platforms {expandedSection === 'Cloud Platforms' || expandedSection === null ? '-' : '+'}
        </h3>
        {(expandedSection === 'Cloud Platforms' || expandedSection === null) && (
          <ul className="skills-list">
            <li className="chip">AWS (Amazon Web Services)</li>
            <li className="chip">Azure (Microsoft Azure)</li>
          </ul>
        )}
      </div>

      <div className="skills-section">
        <h3 onClick={() => toggleSection('Web & API Development')} className="section-header">
          Web & API Development {expandedSection === 'Web & API Development' || expandedSection === null ? '-' : '+'}
        </h3>
        {(expandedSection === 'Web & API Development' || expandedSection === null) && (
          <ul className="skills-list">
            <li className="chip">RESTful APIs (API Architecture)</li>
            <li className="chip">Express.js (Backend API Framework - Node.js)</li>
            <li className="chip">Koa (Backend API Framework - Node.js)</li>
          </ul>
        )}
      </div>

      <div className="skills-section">
        <h3 onClick={() => toggleSection('Operating Systems')} className="section-header">
          Operating Systems {expandedSection === 'Operating Systems' || expandedSection === null ? '-' : '+'}
        </h3>
        {(expandedSection === 'Operating Systems' || expandedSection === null) && (
          <ul className="skills-list">
            <li className="chip">Linux</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Skills;

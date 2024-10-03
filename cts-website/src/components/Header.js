// src/components/Header.js
import React from 'react';
import {NavLink, useLocation, Link } from 'react-router-dom';

import './Header.css'; // Import CSS specific to this component

const Header = () => {
    const location = useLocation();

  return (
    <header className="App-header">
        <h1><NavLink to="/" className={`nav-link ${location.pathname === '/' ? 'no-style' : ''}`}>
                Chun-Ting's Homepage
            </NavLink>
        </h1>

        <nav> 
        <Link to="/about">About Me</Link> | 
        <Link to="/projects">Projects</Link> | 
        <Link to="/resume">Resume</Link> | 
        
        <Link to="/contact">Contact</Link>
        </nav>


    </header>
  );
};

export default Header;

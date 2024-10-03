// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'; // Import CSS specific to this component

const Header = () => {
  return (
    <header className="App-header">
        <h1>Chun-Ting's Homepage</h1>

        <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About Me</Link> | 
        <Link to="/projects">Projects</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>


    </header>
  );
};

export default Header;

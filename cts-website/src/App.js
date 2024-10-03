import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
        
      <div className="App">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>


        <Footer />
        
      </div>

    </Router>
  );
}

export default App;

import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Alex<span className="accent">.dev</span>
        </a>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="navbar-btn">
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
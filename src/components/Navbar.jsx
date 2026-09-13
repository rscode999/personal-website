import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

/**
 * Navigation bar component. Contains links to other subpages. Remains on the top of the screen.
 */
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="projects">Projects</Link>
          {/* <a href="#contact">Contact</a> */}
        </div>

        <a href="#contact" className="navbar-btn">
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
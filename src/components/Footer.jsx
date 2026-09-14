import React from 'react';
import './Footer.css';

/**
 * Component that renders at the bottom of the page.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a href="https://github.com/rscode999" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/reece-shiraishi-86087b2b2" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
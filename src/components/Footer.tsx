import './Footer.css';

/**
 * Component that renders at the bottom of the page.
 */
export default function Footer(): React.JSX.Element {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side text */}
        <div className="footer-left">
          <p>Made with React/Vite.js 8.3.0</p>
        </div>

        {/* Right side socials */}
        <div className="footer-socials">
          <a href="https://github.com/rscode999" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/reece-shiraishi-86087b2b2" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
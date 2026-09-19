import { Link } from 'react-router-dom';

import './Navbar.css';


/**
 * Navigation bar component. Contains links to other subpages. Remains on the top of the screen.
 */
export default function Navbar(): React.JSX.Element {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <a href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>Deep Dark Secrets</a>
        </div>

        <a href="mailto:rcs374@cornell.edu" className="navbar-btn">
          Contact
        </a>
      </div>
    </nav>
  );
}
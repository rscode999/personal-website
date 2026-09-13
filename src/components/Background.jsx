import './background.css';

import backgroundImage from '../assets/background.png';

/**
 * Renders `child` with an image background.
 * @param child component to render with the website's background 
 */
export default function Background({ children }) {
  return (
    <div className='app-container'>
      <div 
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      {children}
    </div>
  );
}
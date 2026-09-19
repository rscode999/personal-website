import './background.css';

import backgroundImage from '../assets/background.png';


/**
 * Renders `children` with an image background.
 */
export default function Background({ children }: any ): React.JSX.Element {
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
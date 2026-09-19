import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * When placed inside a Router, scrolls to the top of the screen upon loading a new page.
 * 
 * Contains no child components. Does not render a component.
 */
export default function ScrollToTop(): null {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
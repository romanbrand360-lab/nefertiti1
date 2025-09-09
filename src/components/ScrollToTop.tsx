import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * 
 * This component automatically scrolls the page to the top whenever the route changes.
 * It uses the useLocation hook to detect route changes and scrolls to (0, 0) position.
 * The component doesn't render any visible content.
 */
const ScrollToTop = (): null => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top of the page when location changes
    try {
      window.scrollTo(0, 0);
    } catch (error) {
      // Fallback for environments where scrollTo might not be available
      console.warn('ScrollToTop: Unable to scroll to top', error);
    }
  }, [location.pathname]); // Trigger effect when pathname changes

  // This component doesn't render anything visible
  return null;
};

export default ScrollToTop;
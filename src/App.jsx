import './App.css'
import Header from './components/header/header.jsx'
import HeaderMenu from './components/headerMenu/headerMenu.jsx'
import Banner1 from './assets/banner1.svg'
import Rectangle from './assets/rectangle.svg'
import { useState, useEffect } from 'react';
import Banner2 from './assets/banner2.svg'; // Import the second banner

  function App() {
    const [currentBanner, setCurrentBanner] = useState(Banner1);
    const [showRectangles, setShowRectangles] = useState(false);

    const handleRectangleClick = () => {
      setCurrentBanner(currentBanner === Banner1 ? Banner2 : Banner1);
    };
    useEffect(() => {
      const interval = setInterval(() => {
      setCurrentBanner(prevBanner => prevBanner === Banner1 ? Banner2 : Banner1);
      }, 5000);

      return () => clearInterval(interval);
    }, []);
    return (
      <div>
      <Header className="header"/>
      <HeaderMenu className="header-menu"/>
      <div className="banner" onMouseEnter={() => setShowRectangles(true)} onMouseLeave={() => setShowRectangles(false)}>
        {showRectangles && (
        <>
          <img src={Rectangle} alt="Rectangle" className="rectangle1" onClick={handleRectangleClick} />
          <img src={Rectangle} alt="Rectangle" className="rectangle2" onClick={handleRectangleClick} />
        </>
        )}
        <img src={currentBanner} alt="Banner" className="banner1" />
      </div>
      </div>
    );
  }

export default App
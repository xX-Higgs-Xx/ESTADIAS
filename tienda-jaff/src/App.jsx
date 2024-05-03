import React, { useState, useEffect } from 'react';
import './styles/App.css';
import NavBar from './components/navBar';

const App = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="imgSeason">
        <NavBar />
        <div>
          <div className="content" style={{ height: '80vh' }}>
            <h1>Temporada 24</h1>
          </div>
        </div>
        <footer className={showFooter ? 'footer show' : 'footer'}>
          Footer de la aplicación
        </footer>
      </div>
    </>
  );
}

export default App;

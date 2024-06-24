// src/components/ImageGrid.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../image/Accueil/backgroundgrid.jpg';
import image2 from '../image/Accueil/backgroundgrid.jpg';
import image3 from '../image/Accueil/backgroundgrid.jpg';
import image4 from '../image/Accueil/backgroundgrid.jpg';
import gbcolor from '../image/Accueil/colorperso1.png';
import gbdmg from '../image/Accueil/dmgperso4.png';
import gbadv from '../image/Accueil/advanceperso1.png';
import gbadvsp from '../image/Accueil/advancespperso1.png';
import '../CSS/apaccueil.css';

const ImageGrid = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false); // Réinitialiser l'animation
    const timeout = setTimeout(() => setAnimate(true), 100); // Déclencher l'animation après un léger délai
    return () => clearTimeout(timeout); // Nettoyage du timeout
  }, []);

  const handleImageClick = (path) => {
    navigate(path);
  };

  return (
    <div className={`grid-container ${animate ? 'animate' : ''}`}>
      <div
        className="grid-item item1"
        style={{ backgroundImage: `url(${image1})` }}
        onClick={() => handleImageClick('/personnalisation-gdmg')}
      >
        <div className="animated-container">
          <img src={gbdmg} alt="Game boy dmg" className="animated-image" />
        </div>
        <button className="futuristic-button">
          Personnaliser<br></br>Gameboy DMG
        </button>
      </div>
      <div
        className="grid-item item2"
        style={{ backgroundImage: `url(${image2})` }}
        onClick={() => handleImageClick('/personnalisation-gcolor')}
      >
        <div className="animated-container">
          <img src={gbcolor} alt="Game boy color" className="animated-image" />
        </div>
        <button className="futuristic-button">
          Personnaliser<br></br>Gameboy Color
        </button>
      </div>
      <div
        className="grid-item item3"
        style={{ backgroundImage: `url(${image3})` }}
        onClick={() => handleImageClick('/personnalisation-gadvance')}
      >
        <div className="animated-container">
          <img src={gbadv} alt="Game boy advance" className="animated-image" />
        </div>
        <button className="futuristic-button">
          Personnaliser<br></br>Gameboy Advance
        </button>
      </div>
      <div
        className="grid-item item4"
        style={{ backgroundImage: `url(${image4})` }}
        onClick={() => handleImageClick('/personnalisation-gadvance-sp')}
      >
        <div className="animated-container">
          <img src={gbadvsp} alt="Game boy advance sp" className="animated-image" />
        </div>
        <button className="futuristic-button">
          Personnaliser<br></br>Gameboy Advance SP
        </button>
      </div>
    </div>
  );
};

export default ImageGrid;


import React, { useState } from 'react';
import '../CSS/header.css';
import panier from '../image/panier.png';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-h">
      <header>
        <Link to="/" className="accueil">
          <img className="imglogo" src={logo} alt="logo" />
        </Link>
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/accueil" onClick={toggleMenu}>Personnalisation</Link>
          <Link to="/panier" className="panier" onClick={toggleMenu}>
            <img className="imgpanier" src={panier} alt="panier" />
          </Link>
        </nav>
        <div className="burger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        </div>
      </header>
    </div>
  );
}

export default Header;

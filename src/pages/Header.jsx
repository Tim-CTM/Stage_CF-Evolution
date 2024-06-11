import React from 'react';
import '../index.css';
import panier from '../image/panier.png';
import logo from '../image/logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
        <div class="container-h">
          <header>
                <Link to="/" class="accueil">
                <img class="imglogo" src={logo} alt="logo" />
                </Link>
            <div class="hc2">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/personnalisation">Personnalisation</Link></li>
            </div>
                <Link to="/panier" class="panier">
                <img class="imgpanier" src={panier} alt="panier" />
                </Link>
          </header>
        </div>
  );
}

export default Header;
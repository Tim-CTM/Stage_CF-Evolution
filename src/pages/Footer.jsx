import React from 'react';
import '../index.css';
import Insta from '../image/insta.png';
import X from '../image/x.png';
import Facebook from '../image/facebook.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container-f">
          <div class="fc1"> 
            <h4>A propos de nous</h4>
            <p>L'entreprise E-GAMEBOY</p>
          </div>
          <div class="fc2">
            <ul>
              <h4>ㅤ</h4>
                <li><Link to="/mention">Mention légales</Link></li>
                <li><Link to="/contact">Contactez-nous</Link></li>
                <li><Link to="/confidentialite">Politique de confidentialité</Link></li>
                <li><Link to="/cookies">Politique de cookies</Link></li>
                <li><Link to="/cgv">Conditions générales de vente</Link></li>
            </ul>
          </div>
          <div class="fc3">
            <h4>Réseaux sociaux</h4>
              <Link to="https://www.instagram.com/">
                <p><img class="insta" src={Insta} alt="" /></p>
              </Link>
              <Link to="https://x.com/?lang=fr" >
                <p><img class="x" src={X} alt="" /></p>
              </Link>
              <Link to="https://www.facebook.com/?locale=fr_FR">
                <p><img class="facebook" src={Facebook} alt=""/></p>
              </Link>
          </div>
        </div>
        <hr width="90%" align="center" color="gray"/>
        <div class="footer-copy">
          <p>E-GAMEBOY © 2024 Tous droits réservés</p>
        </div>
    </footer>
  );
}

export default Footer;

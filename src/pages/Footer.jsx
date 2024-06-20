import React from 'react';
import '../CSS/footer.css';
import Insta from '../image/insta.png';
import X from '../image/x.png';
import Facebook from '../image/facebook.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-f">
        <div className="about-us">
          <h4>A propos de nous</h4>
          <p>L'entreprise E-GAMEBOY</p>
        </div>
        <div className="links">
          <h4>Liens</h4>
          <ul>
            <li><Link to="/mention">Mentions légales</Link></li>
            <li><Link to="/contact">Contactez-nous</Link></li>
            <li><Link to="/cookies">Politique de cookies</Link></li>
            <li><Link to="/cgv">Conditions générales de vente</Link></li>
          </ul>
        </div>
        <div className="social-media">
          <h4>Réseaux sociaux</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img className="insta" src={Insta} alt="Instagram" />
            </a>
            <a href="https://x.com/?lang=fr" target="_blank" rel="noopener noreferrer">
              <img className="x" src={X} alt="X" />
            </a>
            <a href="https://www.facebook.com/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
              <img className="facebook" src={Facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-copy">
        <p>E-GAMEBOY © 2024 Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;
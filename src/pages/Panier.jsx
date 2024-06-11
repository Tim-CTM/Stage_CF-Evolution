import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Panier = () => {
  return (
    <body>
        <div class="entete">
          <a>Votre panier</a>
          <a>Prix</a>
          <a>Quantité</a>
          <a>Total</a>
        </div>
        <div class="cadre">
          <p>Test Panier</p>
        </div>
        <div class="cadre1">
          <p>1</p>
        </div>
        <div class="separation"></div>
        <div>
          <Link to="/commande">Commande</Link>
          <button class="boutoncom">Commander</button>
        </div>
        <div>
          <h2>Text</h2>
      </div>
    </body>
  );
};



export default Panier;


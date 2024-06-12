import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Commande from './pages/Commande';
import Panier from './pages/Panier';
import Personnalisation from './pages/Personnalisation';
import Mentions from './pages/Mentions';
import Cookies from './pages/Cookies';
import Confidentialite from './pages/Confidentialite';
import CGV from './pages/CGV';
import Exercice2 from './pages/Exercice2';

const App = () => {
  return (
    <body>
    <Router>
      <div class="App">
          <Header />
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/commande" element={<Commande />} />
              <Route path="/panier" element={<Panier />} />
              <Route path="/personnalisation" element={<Personnalisation />} />
              <Route path="/mention" element={<Mentions/>} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/confidentialite" element={<Confidentialite />} />
              <Route path="/cgv" element={<CGV />} />
            </Routes>
          <Footer />
        </div>
    </Router>
    <script src="./componants/Slider.js"></script>
    {/* <Exercice2/> */}
    </body>
    // <script src=""./coponants/Slider"></script>
  );
};

export default App;

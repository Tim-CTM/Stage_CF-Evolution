import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Accueil from './pages/accueil2';
import Contact from './pages/Contact';
import Commande from './pages/Commande';
import Panier from './pages/Panier';
import Personnalisation from './pages/Personnalisation';
import Gcolor from './pages/Gcolor';
import AdvenceSP from './pages/Advencesp';
import Advence from './pages/Advence';
import Mentions from './pages/Mentions';
import Cookies from './pages/Cookies';
import Confidentialite from './pages/Confidentialite';
import CGV from './pages/CGV';
import Animation from './pages/apaccueil';
import './App.css';

const App = () => {
  return (
    <div>
    <Router>
      <div className="App">
          {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/accueil" element={<Animation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/commande" element={<Commande />} />
              <Route path="/panier" element={<Panier />} />
              <Route path="/personnalisation-gdmg" element={<Personnalisation />} />
              <Route path="/personnalisation-gcolor" element={<Gcolor />} />
              <Route path="/personnalisation-gadvance-sp" element={<AdvenceSP />} />
              <Route path="/personnalisation-gadvance" element={<Advence />} />
              <Route path="/mention" element={<Mentions/>} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/confidentialite" element={<Confidentialite />} />
              <Route path="/cgv" element={<CGV />} />
            </Routes>
          {/* <Footer />  */}
        </div>
    </Router>
    </div>
  );
};

export default App;

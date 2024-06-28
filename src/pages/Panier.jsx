import React, { useEffect, useState } from 'react';
import '../CSS/panier.css';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    tel: '',
    codepostal:'',
  });

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData, cart }),
    });

    if (response.ok) {
      alert('Email envoyé avec succès');
    } else {
      alert('Erreur lors de l\'envoi de l\'email');
    }
  };

  const formatPrice = (price) => {
    return price !== null ? Number(price).toFixed(2) : "0.00";
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalItemPrice, 0).toFixed(2);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const renderProductDetail = (label, value, price) => (
    value ? (
      <div>
        <strong>{label}:</strong> {value}
        {price !== 0 && price !== null && <span className="price">+ {formatPrice(price)}€</span>}
      </div>
    ) : null
  );
  
  return (
    <div>
    <Header />
    <div className='section1'>
      <div className='recap'>
        <h1>Récapitulatif de votre panier</h1>
        {cart.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Produit</th>
                <th>Prix total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td data-label="Produit">
                    <div>
                      <h3> {item.nom} </h3>
                      <div>
                        <strong>Prix de base:</strong> <span className="price"> {formatPrice(item.pricedeBase)} €</span>
                      </div>
                      {renderProductDetail('Base Console', item.baseconsole?.color, item.baseconsolePrice)}
                      {renderProductDetail('Coque', item.coque?.color, item.coquePrice)}
                      {renderProductDetail('Coque Arrière', item.backcoque?.color, item.backcoquePrice)}
                      {renderProductDetail('Bouton', item.bp?.color, item.bpPrice)}
                      {renderProductDetail('Pads', item.pads?.color, item.padsPrice)}
                      {renderProductDetail('Sticker', item.sticker?.color, item.stickerPrice)}
                      {renderProductDetail('Lanière', item.laniere?.color, item.lanierePrice)}
                      {renderProductDetail('Ecran IPS', item.screen?.color, item.screenPrice)}
                      {renderProductDetail('RGB', item.rgb?.color, item.rgbPrice)}
                      {renderProductDetail('RGB trigger', item.rgbtrigger?.color, item.rgbtriggerPrice)}
                      {renderProductDetail('Pad tactile', item.padtactile?.color, item.padtactilePrice)}
                      {renderProductDetail('Audio', item.audio?.color, item.audioPrice)}
                      {renderProductDetail('Installation betterie', item.installation?.color, item.installationPrice)}
                      {renderProductDetail('Accessoires', item.accessoires?.color, item.accessoiresPrice)}
                    </div>
                  </td>
                  <td data-label="Prix">{formatPrice(item.totalItemPrice)}€</td>
                  <td data-label="Action">
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Retirer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <h4>Total du panier: {calculateTotalPrice()}€</h4>
      </div>  
      <div className='formulaire'>
        <h2>Formulaire de commande</h2>
        <p>Veuiller remplir le formulaire pour valider votre panier.</p>
        <p>Nous vous contacterons lors de la réception de votre commande</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nom :
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Prénom :
              <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
            </label>
          </div>
          <div>
          <label>
              E-mail :
              <input type="text" name="email" value={formData.email} onChange={handleChange} required />
            </label>
          </div>
          <div>
          <label>
              Numéro de téléphone :
              <input type="text" name="tel" value={formData.tel} onChange={handleChange} required />
            </label>
          </div>
          <div>
          <label>
              Code postal :
              <input type="text" name="codepostal" value={formData.codepostal} onChange={handleChange} required />
            </label>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default CheckoutForm;
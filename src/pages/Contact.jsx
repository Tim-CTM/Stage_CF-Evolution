import React from 'react';


const Contact = () => {
  return (
        <div class="container-xl">
          <form>
            <div><h2>Contact</h2></div>
            <div class="divcontact">
              <input type="text" id="nom" name="nom" placeholder="Adresse e-mail" />
              <h2>Nom</h2>  
              <input type="text" id="nom" name="nom" placeholder="Entrez votre nom" />
              <h2>Prénom</h2>
              <input type="text" id="prenom" name="prenom" placeholder="Entrez votre prénom" />
              <h2>Objet</h2>
              <input type="text" id="objet" name="objet"/>
              <h2>Message</h2>
              <input type="text" id="message" name="message" placeholder="Votre message" />
              <br/>
              <input type="submit" value="Envoyer" />
            </div>
            <div>
              <h2>Coordonnées</h2>
            </div>
            <div>
              <p>Icon mail : contact@e-gameboy.fr </p>
              <p>Icon tel : +33 00 00 00 00 </p>
              <p>Icon maison : Cc Petite Arche, Rn 10, 37100 Tours, France</p>
            </div>
          </form>
      </div>
  );
};

export default Contact;

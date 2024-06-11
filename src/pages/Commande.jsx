import React from 'react';

const Commande = () => {
  return (
    <body>
      <section class="section1">
        <div class="container-xl">
          <form>
            <div><h2>Contact</h2></div>
              <div class="divcontact"><input type="text" id="nom" name="nom" placeholder="Adresse e-mail" /></div>
              <div><h2>Adresse d'expédition</h2></div>
              <input type="text" id="nom" name="nom" placeholder="Pays/Région" />
                <div>
                  <label htmlFor="nom"><h2>Nom</h2></label>
                  <input type="text" id="nom" name="nom" placeholder="Entrez votre nom" />
                </div>
                <div>
                  <label htmlFor="prenom"><h2>Prénom</h2></label>
                  <input type="text" id="prenom" name="prenom" placeholder="Entrez votre prénom" />
                </div>
                <div>
                  <label htmlFor="adresse"><h2>Adresse</h2></label>
                  <input type="text" id="adresse" name="adresse" placeholder="Entrez votre adresse" />
                </div>
                <div><input type="text" id="facultatif" name="facultatif" placeholder="Facultatif : étage,code" /></div>
                <div><input type="text" id="code" name="code" placeholder="Code postal" /></div>
                <div><input type="text" id="ville" name="ville" placeholder="Ville" /></div>
                <div><input type="text" id="telephone" name="telephone" placeholder="Numéro de téléphone" /></div>
                <div><button class="boutoncom">Commander</button></div> 
                <div><h2>Récapitulatif</h2></div>
            </form>
          </div>      
      </section>
    </body>
  );
};

export default Commande;
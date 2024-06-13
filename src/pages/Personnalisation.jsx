import React, { useState } from 'react';

// import coque
import Game1 from '../image/Gameboy_DMG/DMG_0.png';
import Game2 from '../image/Gameboy_DMG/DMG_1.png';
import Game3 from '../image/Gameboy_DMG/DMG_2.png';
import Game4 from '../image/Gameboy_DMG/DMG_3.png';
import Game5 from '../image/Gameboy_DMG/DMG_4.png';
import Game6 from '../image/Gameboy_DMG/DMG_5.png';
import Game7 from '../image/Gameboy_DMG/DMG_6.png';
import Game8 from '../image/Gameboy_DMG/DMG_7.png';
import Game9 from '../image/Gameboy_DMG/DMG_8.png';
import Game10 from '../image/Gameboy_DMG/DMG_9.png';
import Game11 from '../image/Gameboy_DMG/DMG_10.png';
import Game12 from '../image/Gameboy_DMG/DMG_12.png';


// Import bouton
import BP1 from '../image/Gameboy_DMG/BP_0.png';
import BP2 from '../image/Gameboy_DMG/BP_1.png';
import BP3 from '../image/Gameboy_DMG/BP_2.png';
import BP4 from '../image/Gameboy_DMG/BP_3.png';
import BP5 from '../image/Gameboy_DMG/BP_4.png';
import BP6 from '../image/Gameboy_DMG/BP_5.png';
import BP7 from '../image/Gameboy_DMG/BP_6.png';
import BP8 from '../image/Gameboy_DMG/BP_7.png';
import BP9 from '../image/Gameboy_DMG/BP_8.png';
import BP10 from '../image/Gameboy_DMG/BP_9.png';
import BP11 from '../image/Gameboy_DMG/BP_10.png';
import BP12 from '../image/Gameboy_DMG/BP_12.png';


// Import coque arrière
import DMG_B0 from '../image/Gameboy_DMG/DMG_B0.png';
import DMG_B1 from '../image/Gameboy_DMG/DMG_B1.png';
import DMG_B2 from '../image/Gameboy_DMG/DMG_B2.png';
import DMG_B3 from '../image/Gameboy_DMG/DMG_B3.png';
import DMG_B4 from '../image/Gameboy_DMG/DMG_B4.png';
import DMG_B5 from '../image/Gameboy_DMG/DMG_B5.png';
import DMG_B6 from '../image/Gameboy_DMG/DMG_B6.png';
import DMG_B7 from '../image/Gameboy_DMG/DMG_B7.png';
import DMG_B8 from '../image/Gameboy_DMG/DMG_B8.png';
import DMG_B10 from '../image/Gameboy_DMG/DMG_B10.png';
import DMG_B11 from '../image/Gameboy_DMG/DMG_B11.png';
import DMG_B12 from '../image/Gameboy_DMG/DMG_B12.png';
import DMG_B13 from '../image/Gameboy_DMG/DMG_B13.png';


// Le reste
import Shadow from '../image/Gameboy_DMG/SHADOW.png';
import Start from '../image/Gameboy_DMG/Start.png';
import Screen from '../image/Gameboy_DMG/Screen.png'



const Perso = () => {
  const [mainImages, setMainImages] = useState(Game1);
  const [bpImages, setBpImages] = useState(BP1);
  const [dmgbImages, setDmgbImages] = useState(DMG_B0);
  const [panier, setPanier] = useState([]);
  
  // list coque
  const coqueimg = [
    { src: Game1, className: "bp-base coque-0", message: " Game1" },
    { src: Game2, className: "bp-base coque-bleu", message: " Game2" },
    { src: Game3, className: "bp-base coque-violet", message: " Game3" },
    { src: Game4, className: "bp-base coque-jaune", message: " Game4" },
    { src: Game5, className: "bp-base coque-bleu-verre", message: "Game5" },
    { src: Game6, className: "bp-base coque-cyan-verre", message: "Game6" },
    { src: Game7, className: "bp-base coque-verre", message: "Game7" },
    { src: Game8, className: "bp-base coque-orange-verre", message: "Game8" },
    { src: Game9, className: "bp-base coque-red-verre", message: "Mame9" },
    { src: Game10, className: "bp-base coque-turquoise-verre", message: "Game10" },
    { src: Game11, className: "bp-base coque-green", message: "Game11" },
    { src: Game12, className: "bp-base coque-white", message: "Game12" },
  ];

  // list bp
  const bpimages = [
    { src: BP1, className: "bp-base BP0", message: "BP1" },
    { src: BP12, className: "bp-base BP-bleu", message: "BP12" },
    { src: BP2, className: "bp-base BP-orange", message: "BP2" },
    { src: BP3, className: "bp-base BP-red", message: "BP3" },
    { src: BP4, className: "bp-base BP-black", message: "BP4" },
    { src: BP5, className: "bp-base BP-rose", message: " BP5" },
    { src: BP6, className: "bp-base BP-black-verre", message: "BP6" },
    { src: BP7, className: "bp-base BP-bleu-verre", message: " BP7" },
    { src: BP8, className: "bp-base BP-green-verre", message: "BP8" },
    { src: BP9, className: "bp-base BP-orange-verre", message: " BP9" },
    { src: BP10, className: "bp-base BP-verre", message: "BP10" },
    { src: BP11, className: "bp-base BP-white", message: " BP11" },
  ];

  // list dmg
  const dmgbimg = [
    { src: DMG_B0, className: "bp-base DMG_B0", message: "DMG_B0" },
    { src: DMG_B1, className: "bp-base DMG_B1", message: "DMG_B1" },
    { src: DMG_B2, className: "bp-base DMG_B2", message: "DMG_B2" },
    { src: DMG_B3, className: "bp-base DMG_B3", message: "DMG_B3" },
    { src: DMG_B4, className: "bp-base DMG_B4", message: "DMG_B4" },
    { src: DMG_B5, className: "bp-base DMG_B5", message: "DMG_B5" },
    { src: DMG_B6, className: "bp-base DMG_B6", message: "DMG_B6" },
    { src: DMG_B7, className: "bp-base DMG_B7", message: "DMG_B7" },
    { src: DMG_B8, className: "bp-base DMG_B8", message: "DMG_B8" },
    { src: DMG_B10, className: "bp-base DMG_B10", message: " DMG_B10" },
    { src: DMG_B11, className: "bp-base DMG_B11", message: " DMG_B11" },
    { src: DMG_B12, className: "bp-base DMG_B12", message: "DMG_B12" },
    { src: DMG_B13, className: "bp-base DMG_B13", message: "DMG_B13" },
  ];

const ajoutepanier = () => {
  const nouvitem = {
    bp: bpImages,
    coque: coqueimg,
  };
  setPanier([...panier, nouvitem]);
};


  return (
    <body>
      <section className="section-bleu">
        <h1>GameBoy DMG</h1>
      </section>
      
      <section className="container-perso">
        <div className="pc1">
          <h1>Personnalisation Gameboy DMG</h1>
          <p>BASE CONSOLE</p>
          <hr width="250px" align="left" />
          <ul>
            <li></li>
          </ul>
          <p>Coque</p>
          <hr width="250px" align="left" />
          <ul>
            <li>
              {coqueimg.map((image, index) => (
                <button
                  key={index}
                  className={image.className}
                  onClick={() => setMainImages(image.src)}
                ></button>
              ))}
            </li>
          </ul>
          <p>Coque arrière</p>
          <hr width="250px" align="left" />
          <ul>
            <li>
              {dmgbimg.map((image, index) => (
                <button
                  key={index}
                  className={image.className}
                  onClick={() => setDmgbImages(image.src)}
                  
                ></button>  
              ))}
            </li>
          </ul>
          <p>BOUTONS</p>
          <hr width="250px" align="left" />
          <ul>
            <li>
              {bpimages.map((image, index) => (
                <button
                  key={index}
                  className={image.className}
                  onClick={() => setBpImages(image.src)}
                ></button>  
              ))}
            </li>        
          </ul>      
          <p>Pads</p>
          <hr width="250px" align="left"></hr>
          <p>ECRAN IPS RÉTROÉCLAIRÉ </p>
          <hr width="250px" align="left"></hr>
          <p>INSTALLATION BATTERIE</p>
          <hr width="250px" align="left"></hr>
          <p>USB-C MOD</p>
          <hr width="250px" align="left"></hr>
          <p>INSTALLATION AUDIO AMP</p>
          <hr width="250px" align="left"></hr>
          <p>INSTALLATION LED RGB</p>
          <hr width="250px" align="left"></hr>
          <p>ACCESSOIRES</p>
          <hr width="250px" align="left"></hr>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <button className="panier" onClick={ajoutepanier}>Ajouter au panier</button>
        </div>
        <div className="pc2">
          <img id="img1" className="superpose" src={mainImages} />
          <img id="img2" className="superpose" src={Screen} />
          <img id="img3" className="superpose" src={Shadow} />
          <img id="img4" className="superpose" src={bpImages} />
          <img id="img5" className="superpose" src={Start} />
          <img id="img6" className="superpose" src={dmgbImages}/> 
        </div>
      </section>
              
      <section class="section-bleu">
      <h1>Utilisation</h1>
      </section>

        <section class="container-sidespace">
          <div>
            <h2> Régler la luminosité de l’écran</h2>
            <li>Pour régler la luminosité, il faudra appuyer sur le bouton lumière, comme sur une Gameboy Advance SP original.</li>
            <li>L’écran possède 8 niveaux de luminosité.</li>
          </div>
          <div>
            <h2> Accéder au menu de l’écran</h2>
            <p>Pour accéder au menu de la console, maintenez le bouton lumière pendant 3 s.</p>
            <p>Le menu intègre 4 catégories :</p>
            <li>BRT : Niveau de luminosité entre 01 et 15</li>
            <li>CLR : 4 filtres d’écran différents</li>
            <li>DSP : Simule les pixels sur l’écran.</li>
            <li>FRM : Simule un flou de mouvement. (Off par defaut)</li>
            <p>Pour passer d’une catégorie à une autre, appuyez sur le bouton lumière</p>
          </div>
          <div>
            <h2> Batterie upgrade + USB-C</h2>
            <p>L’upgrade de la batterie a une capacité de 950mAh. Elle propose une durée de jeu entre 8 h et 10 h. Il est également possible de jouer branché.</p>
            <p>Le changement du port de charge permet d’installer un USB-C qui facilitera la recharge, le câble est fourni avec la console</p>
            <p> Pour le dock de charge, ne pas dépasser 5 W et ne pas utiliser de charge rapide. Cela va bloquer la console et la mettre en sécurité.</p>
          </div>
          <div>
            <h2> INSTALLATION DE LED RGB</h2>
            <li>L’allumage des LED se fait en maintenant A+B pendant 2s</li>
            <li>Pour régler la luminosité des LED, maintenir SELECT + A ou B.</li>
            <p>Il existe 4 modes de couleurs :</p>
            <li>STATIC : LED fixe sur la couleur que vous avez choisis.</li>
            <li>BREATH : Les LED vont baisser et monter en intensité.</li>
            <li>RAINBOW : Les LED changeront de couleur de gauche à droite.</li>
            <li>OFF : Les LED sont éteintes.</li>
            <p>OFF : Les LED sont éteintes.</p>
            <li>Maintenir START + A ou B pour valider les couleurs</li>
          </div>  
        </section>
  </body>
  );
};

export default Perso;

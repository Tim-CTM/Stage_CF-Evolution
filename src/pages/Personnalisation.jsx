import React, { useState } from 'react';

// import coque
import Game1 from '../image/Gameboy_DMG/DMG_0.png';
import Game2 from '../image/Gameboy_DMG/DMG_1.png';
import Game3 from '../image/Gameboy_DMG/DMG_2.png';
import Game4 from '../image/Gameboy_DMG/DMG_3.png';

// Import bouton
import BP1 from '../image/Gameboy_DMG/BP_1.png';
import BP2 from '../image/Gameboy_DMG/BP_2.png';
import BP3 from '../image/Gameboy_DMG/BP_3.png';

// Le reste
import Shadow from '../image/Gameboy_DMG/SHADOW.png';
import Start from '../image/Gameboy_DMG/Start.png';
import Screen from '../image/Gameboy_DMG/Screen.png'



const Perso = () => {
  const [mainImages, setMainImages] = useState(Game1);
  const [bpImages, setBpImages] = useState(BP1);

  // list coque
  const coqueimg = [
    { src: Game1, className: "bp-base coque-0" },
    { src: Game2, className: "bp-base coque-bleu" },
    { src: Game3, className: "bp-base coque-violet" },
    { src: Game4, className: "bp-base coque-jaune" },
  ];

  // list bp
  const bpimages = [
    { src: BP1, className: "bp-base BP0" },
    { src: BP2, className: "bp-base BP-orange" },
    { src: BP3, className: "bp-base BP-red" },
  ];

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
            <li></li>
            <li></li>
            <li></li>
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
        </div>
        <div className="pc2">
          <img id="img1" className="superpose" src={mainImages} />
          <img id="img2" className="superpose" src={Screen} />
          <img id="img3" className="superpose" src={Shadow} />
          <img id="img4" className="superpose" src={bpImages} />
          <img id="img5" className="superpose" src={Start} />
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

import React, { useState } from 'react';
import '../index.css';

// import side coque
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

// Import front coque
import FC_0 from '../image/Gameboy_DMG/F-0.png';
import FC_1 from '../image/Gameboy_DMG/F-1.png';
import FC_2 from '../image/Gameboy_DMG/F-2.png';
import FC_3 from '../image/Gameboy_DMG/F-3.png';
import FC_4 from '../image/Gameboy_DMG/F-4.png';
import FC_5 from '../image/Gameboy_DMG/F-5.png';
import FC_6 from '../image/Gameboy_DMG/F-6.png';
import FC_7 from '../image/Gameboy_DMG/F-7.png';
import FC_8 from '../image/Gameboy_DMG/F-8.png';
import FC_9 from '../image/Gameboy_DMG/F-9.png';
import FC_10 from '../image/Gameboy_DMG/F-10.png';
import FC_11 from '../image/Gameboy_DMG/F-11.png';
import FC_12 from '../image/Gameboy_DMG/F-12.png';


// Import side bouton
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

// import front bouton
import FBP1 from '../image/Gameboy_DMG/FBP_0.png';
import FBP2 from '../image/Gameboy_DMG/FBP_1.png';
import FBP3 from '../image/Gameboy_DMG/FBP_2.png';
import FBP4 from '../image/Gameboy_DMG/FBP_3.png';
import FBP5 from '../image/Gameboy_DMG/FBP_4.png';
import FBP6 from '../image/Gameboy_DMG/FBP_5.png';
import FBP7 from '../image/Gameboy_DMG/FBP_6.png';
import FBP8 from '../image/Gameboy_DMG/FBP_7.png';
import FBP9 from '../image/Gameboy_DMG/FBP_8.png';
import FBP10 from '../image/Gameboy_DMG/FBP_9.png';
import FBP11 from '../image/Gameboy_DMG/FBP_10.png';
import FBP12 from '../image/Gameboy_DMG/FBP_12.png';

// Import side coque arrière
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


// Le reste
import Shadow from '../image/Gameboy_DMG/SHADOW.png';
import F_Shadow from '../image/Gameboy_DMG/F-shadow.png';
import Start from '../image/Gameboy_DMG/Start.png';
import F_Start from '../image/Gameboy_DMG/Start.png';
import Screen from '../image/Gameboy_DMG/Screen.png';
import F_Screen from '../image/Gameboy_DMG/Screen.png';


const imagesData = {
  bp: [
    { src: BP1, frontSrc: FBP1, className: "bp-base BP1", price: null, color: "DMG" },
    { src: BP2, frontSrc: FBP2, className: "bp-base BP2", price: null, color: "Bleu" },
    { src: BP3, frontSrc: FBP3, className: "bp-base BP3", price: null, color: "Orange" },
    { src: BP4, frontSrc: FBP4, className: "bp-base BP4", price: null, color: "" },
    { src: BP5, frontSrc: FBP5, className: "bp-base BP5", price: null, color: "" },
    { src: BP6, frontSrc: FBP6, className: "bp-base BP6", price: null, color: "" },
    { src: BP7, frontSrc: FBP7, className: "bp-base BP7", price: null, color: "" },
    { src: BP8, frontSrc: FBP8, className: "bp-base BP8", price: null, color: "" },
    { src: BP9, frontSrc: FBP9, className: "bp-base BP9", price: null, color: "" },
    { src: BP10, frontSrc: FBP10, className: "bp-base BP10", price: null, color: "" },
    { src: BP11, frontSrc: FBP11, className: "bp-base BP11", price: null, color: "" },
    { src: BP12, frontSrc: FBP12, className: "bp-base BP12", price: null, color: "" },
  ],
  coque: [
    { src: Game1, frontSrc: FC_1, className: "bp-base DMG_B0", price: null, color: "DMG" },
    { src: Game2, frontSrc: FC_2, className: "bp-base DMG_B1", price: null, color: "" },
    { src: Game3, frontSrc: FC_3, className: "bp-base DMG_B2", price: null, color: "" },
    { src: Game4, frontSrc: FC_4, className: "bp-base DMG_B3", price: null, color: "" },
    { src: Game5, frontSrc: FC_5, className: "bp-base DMG_B4", price: null, color: "" },
    { src: Game6, frontSrc: FC_6, className: "bp-base DMG_B5", price: null, color: "" },
    { src: Game7, frontSrc: FC_7, className: "bp-base DMG_B6", price: null, color: "" },
    { src: Game8, frontSrc: FC_8, className: "bp-base DMG_B7", price: null, color: "" },
    { src: Game9, frontSrc: FC_9, className: "bp-base DMG_B8", price: null, color: "" },
    { src: Game10, frontSrc: FC_10, className: "bp-base DMG_B10", price: null, color: "" },
    { src: Game11, frontSrc: FC_11, className: "bp-base DMG_B11", price: null, color: "" },
    { src: Game12, frontSrc: FC_12, className: "bp-base DMG_B12", price: null, color: "" },
  ],
  baseconsole: [
    { src: null, frontSrc: null, className: "bp-base base-console-0", price: null, color: "Oui" },
    { src: null, frontSrc: null, className: "bp-base base-console-1", price: 40, color: "Non" },
  ]
};


const ImageAll = () => {
  const [selectImages, setSelectImages] = useState({
    bp: imagesData.bp[0],
    coque: imagesData.coque[0],
    baseconsole: imagesData.baseconsole[0],
  });

  const updateImages = (type, selectImage) => {
    setSelectImages(prevState => ({
      ...prevState,
      [type]: selectImage
    })); 
  };


  const addToPanier = () => {
    const { bp, coque, baseconsole } = selectImages;
    const newItem = {
      bp: bp.src,
      coque: coque.src,
      baseconsole: baseconsole.src,
      bpPrice: bp.price ?? 0,
      coquePrice: coque.price ?? 0,
      baseconsolePrice: baseconsole.price ?? 0,
      totalItemPrice: basePrice + (bp.price ?? 0) + (coque.price ?? 0) + (baseconsole.price ?? 0)
    };
    setCart([...cart, newItem]);
  };


const Image = ({ type, images, updateImages }) => (
  <div>
    <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
    {images.map((image, index) => (
      <div className="bp-container" key={index}>
        <button
          className={image.className}
          onClick={() => updateImages(type, image)}
        ></button>
        <span className="price-tag">
          <span>{image.color}</span>
          {image.price !== null && <span> +{formatPrice(image.price)}€</span>}
        </span>
      </div>
    ))}
  </div>
);
  const [hoverMessage, setHoverMessage] = useState("");
  const [mainImages, setMainImages] = useState(selectImages.coque.src);

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
              <li>
                <Image type="baseconsole" images={imagesData.baseconsole} updateImages={updateImages} />
              </li>
            </ul>
            <p>Coque</p>
            <hr width="250px" align="left" />
            <ul>
              <li>
                <Image type="coque" images={imagesData.coque} updateImages={updateImages} />
              </li>
            </ul>
            <p>Coque arrière</p>
            <hr width="250px" align="left" />
            <ul>
              <li>
              </li>
            </ul>
            <p>BOUTONS</p>
            <hr width="250px" align="left" />
            <ul>
              <li>
                <Image type="bp" images={imagesData.bp} updateImages={updateImages} />
              </li>
            </ul>
            <p>Pads</p>
            <hr width="250px" align="left" />
            <p>ECRAN IPS RÉTROÉCLAIRÉ </p>
            <hr width="250px" align="left" />
            <p>INSTALLATION BATTERIE</p>
            <hr width="250px" align="left" />
            <p>USB-C MOD</p>
            <hr width="250px" align="left" />
            <p>INSTALLATION AUDIO AMP</p>
            <hr width="250px" align="left" />
            <p>INSTALLATION LED RGB</p>
            <hr width="250px" align="left" />
            <p>ACCESSOIRES</p>
            <hr width="250px" align="left" />
            <button className="panier" onClick={addToPanier}>Ajouter au panier</button>
          </div>
          <div className="pc2">
            <img
            src={selectImages.coque.src}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            ></img>
             <img
            src={selectImages.bp.src}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            ></img>
            <img
            src={Shadow}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            ></img>
            <img
            src={Screen}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            ></img>
            <img
            src={Start}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            ></img>
            <div className="carrousel">
              <button onclick={() => setPOV('Coter')}></button>
              <button onclick={() => setPOV('FRONT')}></button>
            </div>
          </div>
        </section>
  




        <section className="section-bleu">
          <h1>Utilisation</h1>
        </section>
        <section className="container-sidespace">
          <div>
            <h2> Régler la luminosité de l’écran</h2>
            <ul>
              <li>Pour régler la luminosité, il faudra appuyer sur le bouton lumière, comme sur une Gameboy Advance SP original.</li>
              <li>L’écran possède 8 niveaux de luminosité.</li>
            </ul>
          </div>
          <div>
            <h2> Accéder au menu de l’écran</h2>
            <p>Pour accéder au menu de la console, maintenez le bouton lumière pendant 3 s.</p>
            <p>Le menu intègre 4 catégories :</p>
            <ul>
              <li>BRT : Niveau de luminosité entre 01 et 15</li>
              <li>CLR : 4 filtres d’écran différents</li>
              <li>DSP : Simule les pixels sur l’écran.</li>
              <li>FRM : Simule un flou de mouvement. (Off par defaut)</li>
            </ul>
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
            <ul>
              <li>L’allumage des LED se fait en maintenant A+B pendant 2s</li>
              <li>Pour régler la luminosité des LED, maintenir SELECT + A ou B.</li>
            </ul>
            <p>Il existe 4 modes de couleurs :</p>
            <ul>
              <li>STATIC : LED fixe sur la couleur que vous avez choisis.</li>
              <li>BREATH : Les LED vont baisser et monter en intensité.</li>
              <li>RAINBOW : Les LED changeront de couleur de gauche à droite.</li>
              <li>OFF : Les LED sont éteintes.</li>
            </ul>
            <p>Maintenir START + A ou B pour valider les couleurs</p>
          </div>
        </section>
      </body>
    );
  };

  export default ImageAll;
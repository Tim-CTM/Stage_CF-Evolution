import React, { useState } from 'react';
import '../index.css';
import images from '../image/imagedmg.jsx';

const imagesData = {
  bp: [
    { src: images.DMG_BP0, frontSrc: images.DMG_FBP0, className: "bp-base", price: null, color: "" },
    { src: images.DMG_BPBlackG, frontSrc: images.DMG_FBPBlackG , className: "bp-base", price: null, color: "" },
    { src: images.DMG_BPBlack, frontSrc: images.DMG_FBPBlack, className: "bp-base ", price: null, color: "" },
    { src: images.DMG_BPBleuG, frontSrc: images.DMG_FBPBleuG, className: "bp-base ", price: null, color: "" },
    { src: images.DMG_BPBleu, frontSrc: images.DMG_FBPBleu, className: "bp-base ", price: null, color: "" },
    { src: images.DMG_BPGreenG, frontSrc: images.DMG_FBPGreenG, className: "bp-base ", price: null, color: "" },
    { src: images.DMG_BPOrangeG, frontSrc: images.DMG_FBPOrangeG, className: "bp-base ", price: null, color: ""},
    { src: images.DMG_BPOrange, frontSrc: images.DMG_FBPOrange, className: "bp-base ", price: null, color: "" },
    { src: images.DMG_BPRed, frontSrc: images.DMG_FBPRed, className: "bp-base ", price: null, color: "" },
    { src: images.DMG_BPRose, frontSrc: images.DMG_FBPRose, className: "bp-base ", price: null, color: "" },
    { src: images.DMG_BPWhite, frontSrc: images.DMG_FBPWhite, className: "bp-base ", price: null, color: "" },
    { src: images.DMG_BPG, frontSrc: images.DMG_FBPG, className: "bp-base ", price: null, color: "" },

  ],
  coque: [
    { src: images.DMGcoqueImage0 , frontSrc: images.DMG_FCoque0, className: "bp-base DMG_B0", price: null, color: "" },
    { src: images.DMGcoqueImageBleu , frontSrc: images.DMG_FCoqueBleu, className: "bp-base", price: null, color: "" },
    { src: images.DMGcoqueImageYellow , frontSrc: images.DMG_FCoqueYellow, className: "bp-base ", price: null, color: "" },
    { src: images.DMGcoqueImageWhite , frontSrc: images.DMG_FCoqueWhite, className: "bp-base ", price: null, color: "" },
    { src: images.DMGcoqueImageRedG , frontSrc: images.DMG_FCoqueRedG, className: "bp-base ", price: null, color: "" },
    { src: images.DMGcoqueImageG , frontSrc: images.DMG_FCoqueG, className: "bp-base ", price: null, color: "" },
    { src: images.DMGcoqueImageGreen , frontSrc: images.DMG_FCoqueGreen, className: "bp-base ", price: null, color: "" },
    { src: images.DMGcoqueImageGreenG , frontSrc: images.DMG_FCoqueGreenG, className: "bp-base ", price: null, color: "" },
    { src: images.DMGcoqueImagePurpleG , frontSrc: images.DMG_FCoquePurpleG, className: "bp-base ", price: null, color: "" },
    { src: images.DMGcoqueImageBleuG , frontSrc: images.DMG_FCoqueBleuG, className: "bp-base ", price: null, color: "" },
    { src: images.DMGcoqueImageBlackG , frontSrc: images.DMG_FCoqueBlackG, className: "bp-base" , price: null, color: "" },
    { src: images.DMGcoqueImageCyanG , frontSrc: images.DMG_FCoqueCyanG, className: "bp-base ", price: null, color: "" },
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

  const [cart, setCart] = useState([]);
  const [POV, setPOV] = useState('SIDE');
  const basePrice = 129;


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
          {image.price !== null && <span> +(image.price)€</span>}
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
            src={images.DMG_Shadow}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            ></img>
            <img
            src={images.DMG_SCoqueScreen}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            ></img>
            <img
            src={images.DMG_SP0}
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
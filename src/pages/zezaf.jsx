import React, { useState } from 'react';
import '../CSS/persodmg.css';
import Header from './Header';
import Footer from './Footer';
import images from '../image/imagedmg.jsx';

const imagesData = {
  bp: [
    { src: images.DMG_BP0, frontSrc: images.DMG_FBP0, className: "bp-base", price: null, color: "DMG" },
  ],
  coque: [
    { src: images.DMGcoqueImage0 , frontSrc: images.DMG_FCoque0, className: "bp-base DMG_B0", price: null, color: "f" },
  ],
  baseconsole: [
    { src: null, frontSrc: null, className: "bp-base base-console-0", price: null, color: "Oui" },
    { src: null, frontSrc: null, className: "bp-base base-console-1", price: 40, color: "Non" },
  ],
  coquearriere: [
    { src: images.DMG_BCoque0 , frontSrc: null, className: "bp-base DMG_B0", price: null, color: "d" },
  ],
  pads: [
    { src: images.DMG_SP0 , frontSrc: images.DMG_FP0, className: "bp-base DMG_B0", price: null, color: "g" },
  ]
 };
 
 const ImageAll = () => {
  const [selectImages, setSelectImages] = useState({
    bp: imagesData.bp[0],
    coque: imagesData.coque[0],
    baseconsole: imagesData.baseconsole[0],
    coquearriere: imagesData.coquearriere[0],
    pads: imagesData.pads[0],
  });

  const basePrice = 129;
  const updateImages = (type, selectImage) => {

    setSelectImages(prevState => ({
      ...prevState,
      [type]: selectImage
    })); 
  };

  const [view, setView] = useState('SIDE');

  const calculateAllPrice = () => {
    const { bp, coque, baseconsole, pads, coquearriere } = selectImages;
    return basePrice + (bp.price ?? 0) + (coque.price ?? 0) + (baseconsole.price ?? 0) + (pads.price ??0) + (coquearriere.price ??0) ;
  };

  const ImageL = ({ type, images }) => (
    <div className="wrap-btn">
      {images.map((image, index) => (
        <div className="bp-container" key={index}>
          <button
            className={image.className}
            onClick={() => updateImages(type, image)}
          ></button>
          <span className="price-tag">
            <span>{image.color}</span>
            {image.price !== null && <span> +{image.price}€</span>}
          </span>
        </div>
      ))}
    </div>
  );

    return (
      <div>
        <Header />
        <section className="section-bleu">
          <h1>GameBoy DMG</h1>
        </section>

        <section className="container-perso">
          <div >
            <h2>Personnalisation <br></br> Gameboy DMG</h2>
            <hr width="300px" align="left" />
            <h3>Base Console</h3>
              <ImageL type="baseconsole" images={imagesData.baseconsole} updateImages={updateImages} />
            <hr width="250px" align="left" />
            <h3>Coque</h3>
              <ImageL type="coque" images={imagesData.coque} updateImages={updateImages} />
            <hr width="250px" align="left" />
            <h3>Coque arrière</h3>
              <ImageL type="coquearriere" images={imagesData.coquearriere} updateImages={updateImages} />
            <hr width="250px" align="left" />
            <h3>Boutton</h3>
              <ImageL type="bp" images={imagesData.bp} updateImages={updateImages} />
            <hr width="250px" align="left" />
            <p>Pads</p>
              <ImageL type="pads" images={imagesData.pads}  updateImages={updateImages} />
            <hr width="250px" align="left" />
            <h5>Prix total des articles : {calculateAllPrice()} €</h5>
            <button className="panier">Ajouter au panier</button>
          </div>

          <div className={`view ${view === 'SIDE' ? 'SIDE' : 'FRONT'}`}>
            <div style={{ position: "relative", width: "300px", height: "300px" }}>
              <img src={view === 'SIDE' ? selectImages.coque.src : selectImages.coque.frontSrc} alt="Coque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={view === 'SIDE' ? selectImages.bp.src : selectImages.bp.frontSrc} alt="Button" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={view === 'SIDE' ? selectImages.pads.src : selectImages.pads.frontSrc} alt="pads" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={view === 'SIDE' ? images.DMG_Shadow : images.DMG_FShadow} alt="Shadow" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              {view === 'SIDE' && (
                <img src={selectImages.coquearriere.src} alt="coquearriere" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              )}
            </div>

            <div className="views-container">
              <button onClick={() => setView('SIDE')}></button>
              <button onClick={() => setView('FRONT')}></button>
            </div>
          </div>
        </section>

        <section className="section-bleu">
          <h2>Utilisation</h2> 
        </section>
        <section className="container-sidespace">
          <div>
            <h3> Régler la luminosité de l’écran</h3>
            <ul>
              <li>Pour régler la luminosité, il faudra appuyer sur le bouton lumière, comme sur une Gameboy Advance SP original.</li>
              <li>L’écran possède 8 niveaux de luminosité.</li>
            </ul>
          </div>
          <div>
            <h3> Accéder au menu de l’écran</h3>
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
            <h3> Batterie upgrade + USB-C</h3>
            <p>L’upgrade de la batterie a une capacité de 950mAh. Elle propose une durée de jeu entre 8 h et 10 h. Il est également possible de jouer branché.</p>
            <p>Le changement du port de charge permet d’installer un USB-C qui facilitera la recharge, le câble est fourni avec la console</p>
            <p> Pour le dock de charge, ne pas dépasser 5 W et ne pas utiliser de charge rapide. Cela va bloquer la console et la mettre en sécurité.</p>
          </div>
          <div>
            <h3> INSTALLATION DE LED RGB</h3>
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
        <Footer/>
      </div>
    );
  };

  export default ImageAll;
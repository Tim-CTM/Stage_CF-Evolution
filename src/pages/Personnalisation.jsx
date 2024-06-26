import React, { useState } from 'react';
import '../CSS/persodmg.css';
import Header from './Header';
import Footer from './Footer';
import images from '../image/imagedmg.jsx';

const imagesData = {
  bp: [
    { src: images.DMG_BP0, frontSrc: images.DMG_FBP0, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
    { src: images.DMG_BPBlackG, frontSrc: images.DMG_FBPBlackG , className: "bp-base bp-BlackGlass", price: 40, color: "Noir transparent" },
    { src: images.DMG_BPBlack, frontSrc: images.DMG_FBPBlack, className: "bp-base bp-Black", price: 10, color: "Noir" },
    { src: images.DMG_BPBleuG, frontSrc: images.DMG_FBPBleuG, className: "bp-base bp-BleuG", price: null, color: "Bleu transparent" },
    { src: images.DMG_BPBleu, frontSrc: images.DMG_FBPBleu, className: "bp-base bp-Bleu", price: null, color: "Bleu" },
    { src: images.DMG_BPGreenG, frontSrc: images.DMG_FBPGreenG, className: "bp-base bp-VertG", price: null, color: "Vert transparent" },
    { src: images.DMG_BPOrangeG, frontSrc: images.DMG_FBPOrangeG, className: "bp-base bp-OrangeGlass", price: null, color: "Orange transparent"},
    { src: images.DMG_BPOrange, frontSrc: images.DMG_FBPOrange, className: "bp-base bp-Orange", price: null, color: "Orange" },
    { src: images.DMG_BPRed, frontSrc: images.DMG_FBPRed, className: "bp-base bp-Rouge", price: null, color: "Rouge" },
    { src: images.DMG_BPRose, frontSrc: images.DMG_FBPRose, className: "bp-base bp-Rose", price: null, color: "Rose" },
    { src: images.DMG_BPWhite, frontSrc: images.DMG_FBPWhite, className: "bp-base bp-Blanc", price: null, color: "Blanc" },
    { src: images.DMG_BPG, frontSrc: images.DMG_FBPG, className: "bp-base DMG_BPGlass", price: null, color: "Transparent" },
  ],
  coque: [
    { src: images.DMGcoqueImage0 , frontSrc: images.DMG_FCoque0, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
    { src: images.DMGcoqueImageBleu , frontSrc: images.DMG_FCoqueBleu, className: "bp-base bp-Bleu ", price: null, color: "Bleu" },
    { src: images.DMGcoqueImageYellow , frontSrc: images.DMG_FCoqueYellow, className: "bp-base bp-Jaune  ", price: null, color: "Jaune" },
    { src: images.DMGcoqueImageWhite , frontSrc: images.DMG_FCoqueWhite, className: "bp-base bp-Blanc ", price: null, color: "Blanc" },
    { src: images.DMGcoqueImageRedG , frontSrc: images.DMG_FCoqueRedG, className: "bp-base bp-RougeGlass ", price: null, color: "Rouge transparent" },
    { src: images.DMGcoqueImageG , frontSrc: images.DMG_FCoqueG, className: "bp-base bp-Verre  ", price: null, color: "Transparent" },
    { src: images.DMGcoqueImageGreen , frontSrc: images.DMG_FCoqueGreen, className: "bp-base bp-Vert", price: null, color: "Vert" },
    { src: images.DMGcoqueImageGreenG , frontSrc: images.DMG_FCoqueGreenG, className: "bp-base bp-VertG ", price: null, color: "Vert transparent" },
    { src: images.DMGcoqueImagePurpleG , frontSrc: images.DMG_FCoquePurpleG, className: "bp-base bp-Violet  ", price: null, color: "Violet transparent" },
    { src: images.DMGcoqueImageBleuG , frontSrc: images.DMG_FCoqueBleuG, className: "bp-base bp-BleuG ", price: null, color: "Bleu transparent" },
    { src: images.DMGcoqueImageBlackG , frontSrc: images.DMG_FCoqueBlackG, className: "bp-base bp-Black" , price: 15, color: "Noir transparent" },
    { src: images.DMGcoqueImageOrangeG, frontSrc: images.DMG_FCoqueOrangeG , className: "bp-base bp-Orange", price: null, color: "Orange transparent" },
    { src: images.DMGcoqueImageCyanG , frontSrc: images.DMG_FCoqueCyanG, className: "bp-base bp-Cyan", price: null, color: "Cyan transparent" },
  ],
  baseconsole: [
    { src: null, frontSrc: null, className: "bp-base bp-Blanc ", price: null, color: "Oui" },
    { src: null, frontSrc: null, className: "bp-base bp-Black ", price: 40, color: "Non" },
  ],
  coquearriere: [
    { src: images.DMG_BCoque0 , frontSrc: null, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
    { src: images.DMG_BCoqueBleu , frontSrc:null,  className: "bp-base bp-Bleu", price: null, color: "Bleu" },
    { src: images.DMG_BCoqueBleuG , frontSrc: null, className: "bp-base bp-BleuG ", price: null, color: "Bleu transparent" },
    { src: images.DMG_BCoqueCyanG, frontSrc:null , className: "bp-base bp-Cyan ", price: null, color: "Cyan transparent" },
    { src: images.DMG_BCoqueG , frontSrc:null , className: "bp-base bp-Glass", price: null, color: "Transparent" },
    { src: images.DMG_BCoqueGreen , frontSrc: null, className: "bp-base bp-Vert", price: null, color: "Vert" },
    { src: images.DMG_BCoqueGreenG, frontSrc: null, className: "bp-base bp-VertG", price: null, color: "Vert transparent" },
    { src: images.DMG_BCoqueOrangeG, frontSrc:null , className: "bp-base bp-Orange", price: null, color: "Orange" },
    { src: images.DMG_BCoqueBlackG, frontSrc:null , className: "bp-base bp-BlackGlass", price: 10, color: "Noir transparent" },
    { src: images.DMG_BCoquePurpleG , frontSrc: null, className: "bp-base bp-VioletGlass ", price: null, color: "Violet transparent" },
    { src: images.DMG_BCoqueRed, frontSrc: null, className: "bp-base bp-Rouge", price: null, color: "Rouge" },
    { src: images.DMG_BCoqueWhite, frontSrc: null, className: "bp-base bp-Blanc", price: null, color: "Blanc" },
    { src: images.DMG_BCoqueYellow , frontSrc:null , className: "bp-base bp-Jaune", price: null, color: "Jaune" },
  ],
  pads: [
    { src: images.DMG_SP0 , frontSrc: images.DMG_FP0, className: "bp-base bp-GrisDMG ", price: null, color: "DMG" },
    { src: images.DMG_SPBlack , frontSrc:images.DMG_FPBlack,  className: "bp-base bp-Black  ", price: 30, color: "Black" },
    { src: images.DMG_SPBleu  , frontSrc: images.DMG_FPBleu, className: "bp-base bp-Bleu ", price: null, color: "Bleu" },
    { src: images.DMG_SPG, frontSrc:images.DMG_FPG , className: "bp-base bp-Glass", price: null, color: "Transparent" },
    { src: images.DMG_SPGreen , frontSrc:images.DMG_FPLemon, className: "bp-base bp-Vert", price: null, color: "Vert" },
    { src: images.DMG_SPPurple , frontSrc: images.DMG_FPPurple, className: "bp-base bp-Violet", price: null, color: "Violet" },
    { src: images.DMG_SPRed, frontSrc: images.DMG_FPRed, className: "bp-base bp-Rouge ", price: null, color: "Rouge" },
    { src: images.DMG_SPRose, frontSrc: images.DMG_FPRose , className: "bp-base bp-Rose", price: null, color: "Rose" },
    { src: images.DMG_SPYellow , frontSrc: images.DMG_FPYellow, className: "bp-base bp-Jaune ", price: null, color: "Jaune" },
  ],
  screen:[
    { src: images.DMG_SCoqueScreen , frontSrc: images.DMG_FCoqueScreen, className: "bp-base bp-GrisDMG", price: null, color: "Gris" },
    { src: images.DMG_SCoqueScreenB , frontSrc: images.DMG_FCoqueScreenB, className: "bp-base bp-Black ", price: null, color: "Noir" },
  ],
  installation:[
    { src:  null, frontSrc: null, className: "bp-base bp-Blanc", price: null, color: "Aucun" },
    { src:  null, frontSrc: null, className: "bp-base bp-Black", price: 40.00, color: "Batterie" },
  ],
  accessoires:[
    { src: null , frontSrc: null, className: "bp-base ", price: null, color: "Aucun" },
    { src: null , frontSrc: null, className: "bp-base bp-GrisDMG", price: 5.90, color: "Verre trempé" },
  ],
 };


 const ImageAll = () => {
  const [selectImages, setSelectImages] = useState({
    bp: imagesData.bp[0],
    coque: imagesData.coque[0],
    baseconsole: imagesData.baseconsole[0],
    coquearriere: imagesData.coquearriere[0],
    pads: imagesData.pads[0],
    screen: imagesData.screen[0],
    installation: imagesData.installation[0],
    accessoires: imagesData.accessoires[0],
  });

  const [openSection, setOpenSection] = useState('baseconsole');

  const updateImages = (type, selectImage) => {

    setSelectImages(prevState => ({
      ...prevState,
      [type]: selectImage
    })); 
  };

  // const [cart, setCart] = useState([]);

  // const addToPanier = () => {
  //   const { bp, coque, baseconsole, coquearriere, pads } = selectImages;
  //   const newItem = {
  //     bp: bp.src,
  //     coque: coque.src,
  //     baseconsole: baseconsole.src,
  //     bpPrice: bp.price ?? 0,
  //     coquePrice: coque.price ?? 0,
  //     baseconsolePrice: baseconsole.price ?? 0,
  //     coquearrierePrice: coquearriere.price ?? 0,
  //     padsPrice: pads.price ?? 0,
  //     totalItemPrice: basePrice + (bp.price ?? 0) + (coque.price ?? 0) + (baseconsole.price ?? 0)
  //   };
  //   setCart([...cart, newItem]);
  // };

  const [view, setView] = useState('SIDE');


  const calculateAllPrice = () => {
    const { bp, coque, baseconsole, pads, coquearriere, installation, accessoires } = selectImages;
    return basePrice + (bp.price ?? 0) + (coque.price ?? 0) + (baseconsole.price ?? 0) + (pads.price ??0) + (coquearriere.price ??0) + (installation.price ?? 0) +(accessoires.price ?? 0) ;
  };

  const basePrice = 129;


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

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

    return (
      <div>
        <Header />
        <section className="section-bleu">
          <h1>GameBoy DMG</h1>
        </section>

        <section className="container-perso">
          <div className="option-selection">
            <h2>Personnalisation Gameboy DMG</h2>
            <hr width="300px" align="left" />

          {/* Accordeons */}
            <div className="accordion">
              <div className="accordion-item">
                <h3 onClick={() => toggleSection('baseconsole')} className={openSection === 'baseconsole' ? 'active' : ''}>Base Console</h3>
                <p>Création à partir d'une console que vous fournissez</p>
                {openSection === 'baseconsole' && (
                  <div className="accordion-content">
                    <ImageL type="baseconsole" images={imagesData.baseconsole} updateImages={updateImages} />
                  </div>
                )}
                <hr width="300px" align="left" />
              </div>
              <div className="accordion-item">
              <h3 onClick={() => toggleSection('coque')} className={openSection === 'coque' ? 'active' : ''}>Coque</h3>
              <p>Comprend que la coque avant</p>
              {openSection === 'coque' && (
                <div className="accordion-content">
                  <ImageL type="coque" images={imagesData.coque} updateImages={updateImages} />
                </div>
              )}
              <hr width="300px" align="left" />
            </div>

            <div className="accordion-item">
              <h3 onClick={() => toggleSection('coquearriere')} className={openSection === 'coquearriere' ? 'active' : ''}>Coque arrière</h3>
              <p>Uniquement pour les couleurs duo</p>
              {openSection === 'coquearriere' && (
                <div className="accordion-content">
                  <ImageL type="coquearriere" images={imagesData.coquearriere} updateImages={updateImages} />
                </div>
              )}
              <hr width="300px" align="left" />
            </div>

            <div className="accordion-item">
              <h3 onClick={() => toggleSection('bp')} className={openSection === 'bp' ? 'active' : ''}>Boutton</h3>
              {openSection === 'bp' && (
                <div className="accordion-content">
                  <ImageL type="bp" images={imagesData.bp} updateImages={updateImages} />
                </div>
              )}
              <hr width="300px" align="left" />
            </div>

            <div className="accordion-item">
              <h3 onClick={() => toggleSection('pads')} className={openSection === 'pads' ? 'active' : ''}>Pads</h3>
              {openSection === 'pads' && (
                <div className="accordion-content">
                  <ImageL type="pads" images={imagesData.pads} updateImages={updateImages} />
                </div>
              )}
              <hr width="300px" align="left" />
            </div>



          <div className="accordion-item">
              <h3 onClick={() => toggleSection('screen')} className={openSection === 'screen' ? 'active' : ''}>Ecran IPS</h3>
              {openSection === 'screen' && (
                <div className="accordion-content">
                  <ImageL type="screen" images={imagesData.screen} updateImages={updateImages} />
                </div>
              )}
              <hr width="300px" align="left" />
            </div>


            <div className="accordion-item">
              <h3 onClick={() => toggleSection('installation')} className={openSection === 'installation' ? 'active' : ''}>INSTALLATION BATTERIE</h3>
              <p>Pose d'une batterie rechargeable - 2300 mAh</p>
              {openSection === 'installation' && (
                <div className="accordion-content">
                  <ImageL type="installation" images={imagesData.installation} updateImages={updateImages} />
                </div>
              )}
              <hr width="300px" align="left" />
            </div>

            <div className="accordion-item">
              <h3 onClick={() => toggleSection('accessoires')} className={openSection === 'accessoires' ? 'active' : ''}>ACCESSOIRES</h3>

              {openSection === 'accessoires' && (
                <div className="accordion-content">
                  <ImageL type="accessoires" images={imagesData.accessoires} updateImages={updateImages} />
                </div>
              )}
              <hr width="300px" align="left" />
            </div>
            </div>

            <h5>Prix total des articles : {calculateAllPrice()} €</h5>
            <button className="panier">Ajouter au panier</button>
          </div>

          <div className='affichage-view'>
            <div className={`view ${view === 'SIDE' ? 'SIDE' : 'FRONT'}`}>
              <div style={{ position: "relative", width: "300px", height: "300px" }}>
                <img src={view === 'SIDE' ? selectImages.coque.src : selectImages.coque.frontSrc} alt="Coque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                <img src={view === 'SIDE' ? selectImages.bp.src : selectImages.bp.frontSrc} alt="Button" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                <img src={view === 'SIDE' ? selectImages.pads.src : selectImages.pads.frontSrc} alt="pads" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                <img src={view === 'SIDE' ? selectImages.screen.src : selectImages.screen.frontSrc} alt="screen" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
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
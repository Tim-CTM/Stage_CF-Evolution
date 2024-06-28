import React, { useState } from 'react';
import '../CSS/advencesp.css';
import Header from './Header';
import Footer from './Footer';
import images from '../image/imageadvencesp.jsx';


const imagesData = {
    bp: [
      { src: images.GA_SP_SBP0, frontSrc: images.GA_SP_FBP0, className: "bp-base bp-Black", price: null, color: "Blanc" },
      { src: images.GA_SP_SBPBleu, frontSrc: images.GA_SP_FBPBleu , className: "bp-base bp-Bleu", price: null, color: "Bleu" },
      { src: images.GA_SP_SBPGreen, frontSrc: images.GA_SP_FBPGreen, className: "bp-base bp-Vert", price: null, color: "Vert" },
      { src: images.GA_SP_SBPLemon, frontSrc: images.GA_SP_FBPLemon, className: "bp-base bp-Lemon", price: null, color: "Citron" },
      { src: images.GA_SP_SBPOrange, frontSrc: images.GA_SP_FBPOrange, className: "bp-base bp-Orange", price: null, color: "Orange" },
      { src: images.GA_SP_SBPRed, frontSrc: images.GA_SP_FBPRed, className: "bp-base bp-Rouge", price: null, color: "Rouge" },
      { src: images.GA_SP_SBPRose, frontSrc: images.GA_SP_FBPRose, className: "bp-base bp-Rose", price: null, color: "Rose" },
      { src: images.GA_SP_SBPWhite, frontSrc: images.GA_SP_FBPWhite, className: "bp-base bp-Blanc", price: null, color: "Blanc" },
      { src: images.GA_SP_SBPYellow, frontSrc: images.GA_SP_FBPYellow, className: "bp-base bp-Jaune ", price: null, color: "Jaune" },
    ],
    coque: [
      { src: images.GA_SP_SCoque0, frontSrc: images.GA_SP_FCoque0, className: "bp-base bp-Blanc", price: null, color: "Blanc" },
      { src: images.GA_SP_SCoqueBlackG , frontSrc: images.GA_SP_FCoqueBlackG, className: "bp-base bp-BlackGlass ", price: null, color: "Noir transparent" },
      { src: images.GA_SP_SCoqueBlack , frontSrc: images.GA_SP_FCoqueBlack, className: "bp-base bp-Black  ", price: null, color: "Noir" },
      { src: images.GA_SP_SCoqueBleuG , frontSrc: images.GA_SP_FCoqueBleuG, className: "bp-base bp-Bleu ", price: null, color: "Bleu transparent" },
      { src: images.GA_SP_SCoqueCyan , frontSrc: images. GA_SP_FCoqueCyan, className: "bp-base bp-Cyan", price: null, color: "Cyan" },
      { src: images.GA_SP_SCoqueGreenG , frontSrc: images.GA_SP_FCoqueGreenG, className: "bp-base bp-VertG ", price: null, color: "Vert transparent" },
      { src: images.GA_SP_SCoquePurpleA , frontSrc: images.GA_SP_FCoquePurpleA, className: "bp-base bp-VioletA", price: null, color: "Violet atomique" },
      { src: images.GA_SP_SCoquePurpleG , frontSrc: images.GA_SP_FCoquePurpleG, className: "bp-base bp-VioletGlass", price: null, color: "Violet transparant" },
      { src: images.GA_SP_SCoquePurple , frontSrc: images.GA_SP_FCoquePurple, className: "bp-base bp-Violet", price: null, color: "Violet" },
      { src: images.GA_SP_SCoqueRedG , frontSrc: images.GA_SP_FCoqueRedG, className: "bp-base bp-RougeGlass  ", price: null, color: "Rouge transparent" },
      { src: images.GA_SP_SCoqueRose , frontSrc: images.GA_SP_FCoqueRose, className: "bp-base bp-Rose ", price: null, color: "Rose" },
      { src: images.GA_SP_SCoqueYellow , frontSrc: images.GA_SP_FCoqueYellow, className: "bp-base bp-Jaune  ", price: null, color: "Jaune" },
      { src: images.GA_SP_SCoqueG , frontSrc: images.GA_SP_FCoqueG, className: "bp-base bp-Verre  ", price: null, color: "Transparent" },
    ],  
    baseconsole: [
      { src: null, frontSrc: null, className: "bp-base bp-Blanc ", price: null, color: "Oui" },
      { src: null, frontSrc: null, className: "bp-base bp-Black ", price: 40, color: "Non" },
    ],
    backcoque: [
      { src: images.GA_SP_SBCoque0, frontSrc: images.GA_SP_FBCoque0, className: "bp-base bp-Blanc", price: null, color: "Blanc" },
      { src: images.GA_SP_SBCoqueBlackG, frontSrc: images.GA_SP_FBCoqueBlackC, className: "bp-base bp-BlackGlass", price: 16.90, color: "Noir transparent" },
      { src: images.GA_SP_SBCoqueBleuG, frontSrc: images.GA_SP_FBCoqueBleuC, className: "bp-base bp-Bleu", price: 16.90, color: "Bleu transparent" },
      { src: images.GA_SP_SBCoqueCyan, frontSrc: images.GA_SP_FBCoqueCyan, className: "bp-base bp-Cyan", price: 16.90, color: "Cyan" },
      { src: images.GA_SP_SBCoqueGreenG, frontSrc: images.GA_SP_FBCoqueGreenG, className: "bp-base bp-VertG", price: 16.90, color: "Vert transparent" },
      { src: images.GA_SP_SBCoquePurpleA, frontSrc: images.GA_SP_FBCoquePurpleG, className: "bp-base bp-VioletGlass", price: 16.90, color: "Violet atomique" },
      { src: images.GA_SP_SBCoquePurpleG, frontSrc: images.GA_SP_FBCoquePurpleA, className: "bp-base bp-VioletA", price: 16.90, color: "Violet transparent" },
      { src: images.GA_SP_SBCoquePurple, frontSrc: images.GA_SP_FBCoquePurple, className: "bp-base bp-Violet", price: 16.90, color: "Violet" },
      { src: images.GA_SP_SBCoqueRedG, frontSrc: images.GA_SP_FBCoqueRedG, className: "bp-base bp-RougeGlass", price: 16.90, color: "Rouge transparent" },
      { src: images.GA_SP_SBCoqueRose, frontSrc: images.GA_SP_FBCoqueRose, className: "bp-base bp-Rose", price: 16.90, color: "Rose" },
      { src: images.GA_SP_SBCoqueYellow, frontSrc: images.GA_SP_FBCoqueYellow, className: "bp-base bp-Jaune", price: 16.90, color: "Jaune" },
      { src: images.GA_SP_SBCoqueG, frontSrc: images.GA_SP_FBCoqueG, className: "bp-base bp-Glass", price: 16.90, color: "Transparent" },
    ],
    screen: [   
      { src: images.GA_SP_SScreenB, frontSrc: images.GA_SP_FScreenB, className: "bp-base bp-Blanc ", price: null, color: "Blanc" },
      { src: images.GA_SP_SScreenW, frontSrc: images.GA_SP_FScreenW, className: "bp-base bp-Black", price: null, color: "Noir" },
    ],
    installation: [   
      { src: null, frontSrc: null, className: "bp-base bp-Blanc ", price: null, color: "Aucun" },
      { src: null, frontSrc: null, className: "bp-base bp-Black", price: 30, color: "Batterie" },
    ],
    usb: [   
      { src: null, frontSrc: null, className: "bp-base bp-Blanc ", price: null, color: "Aucun" },
      { src: null, frontSrc: null, className: "bp-base bp-Black", price: 20, color: "USB-C" },
    ],
    rgb: [   
      { src: null, frontSrc: null, className: "bp-base bp-Blanc ", price: null, color: "Aucun" },
      { src: null, frontSrc: null, className: "bp-base bp-Black", price: 35, color: "Led RGB" },
    ],
    audio: [   
      { src: null, frontSrc: null, className: "bp-base bp-Blanc ", price: null, color: "Aucun" },
      { src: null, frontSrc: null, className: "bp-base bp-Black", price: 25, color: "Audio AMP" },
    ],
    accessoires: [
      { src: null, frontSrc: null, className: "bp-base bp-Black", price: 8.90, color: "Coque-Silicone" },
      { src: null, frontSrc: null, className: "bp-base ", price: 5.90, color: "Verre trempé" },
      { src: null, frontSrc: null, className: "bp-base ", price: 12.50, color: "Sacoche" },
    ],
    pads: [
      { src: images.GA_SP_SP0, frontSrc: images.GA_SP_FP0, className: "bp-base bp-GrisDMG ", price: null, color: "DMG" },
      { src: images.GA_SP_SPBleu  , frontSrc: images.GA_SP_FPBleu, className: "bp-base bp-Bleu ", price: 2.90, color: "Bleu" },
      { src: images.GA_SP_SPOrange , frontSrc: images.GA_SP_FPOrange, className: "bp-base bp-Orange ", price: 2.90, color: "Orange" },
      { src: images.GA_SP_SPWhite, frontSrc:images.GA_SP_FPWhite , className: "bp-base bp-Blanc", price: 2.90, color: "Blanc" },
      { src: images.GA_SP_SPGreen , frontSrc:images.GA_SP_FPGreen, className: "bp-base bp-Vert", price: 2.90, color: "Vert" },
      { src: images.GA_SP_SPPurple , frontSrc: images.GA_SP_FPPurple, className: "bp-base bp-Violet", price: 2.90, color: "Violet" },
      { src: images.GA_SP_SPRed, frontSrc: images.GA_SP_FPRed, className: "bp-base bp-Rouge ", price: 2.90, color: "Rouge" },
      { src: images.GA_SP_SPYellow , frontSrc: images.GA_SP_FPYellow, className: "bp-base bp-Jaune ", price: 2.90, color: "Jaune" },
    ],
   };

   
   const ImageAll = () => {
    const [selectImages, setSelectImages] = useState({
      bp: imagesData.bp[0],
      coque: imagesData.coque[0],
      baseconsole: imagesData.baseconsole[0],
      backcoque: imagesData.backcoque[0],
      screen: imagesData.screen[0],
      pads: imagesData.pads[0],
      installation: imagesData.installation[0],
      usb: imagesData.usb[0],
      rgb: imagesData.rgb[0],
      audio: imagesData.audio[0],
      accessoires: [],
    });
  
    const [openSection, setOpenSection] = useState('baseconsole');
  
    const updateImages = (type, selectImage) => {
      if (type === "accessoires") {
        setSelectImages(prevState => {
          const updatedAccessoires = prevState.accessoires.includes(selectImage)
            ? prevState.accessoires.filter(item => item !== selectImage)
            : [...prevState.accessoires, selectImage];
          return {
            ...prevState,
            [type]: updatedAccessoires
          };
        });
      } else {
        setSelectImages(prevState => ({
          ...prevState,
          [type]: selectImage
        }));
      }
    };
    
  const [view, setView] = useState('SIDE');



  const calculateAllPrice = () => {
    const { bp, coque, baseconsole, pads, backcoque , installation, usb, accessoires , rgb, audio} = selectImages;
    const accessoiresTotalPrice = accessoires.reduce((total, item) => total + (item.price ?? 0), 0);
    return (
    basePrice + 
    (bp.price ?? 0) + 
    (coque.price ?? 0) + 
    (baseconsole.price ?? 0) + 
    (pads.price ??0) + 
    (backcoque.price ??0) + 
    (installation.price ?? 0) + 
    (usb.price ?? 0) + 
    (rgb.price ?? 0) + 
    (audio.price ?? 0) +
    accessoiresTotalPrice
    );
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
        <h1>GameBoy Advence-SP</h1>
      </section>

      <section className="container-perso">
        <div className="option-selection">
          <h2>Personnalisation Gameboy Advence-SP</h2>
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
            <h3 onClick={() => toggleSection('backcoque')} className={openSection === 'backcoque' ? 'active' : ''}>Coque arrière</h3>
            <p>Uniquement pour les couleurs duo</p>
            {openSection === 'backcoque' && (
              <div className="accordion-content">
                <ImageL type="backcoque" images={imagesData.backcoque} updateImages={updateImages} />
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
            <h3 onClick={() => toggleSection('screen')} className={openSection === 'screen' ? 'active' : ''}>Screen</h3>
            {openSection === 'screen' && (
              <div className="accordion-content">
                <ImageL type="screen" images={imagesData.screen} updateImages={updateImages} />
              </div>
            )}
            <hr width="300px" align="left" />
          </div>


          <hr width="250px" align="left" />

          <div className="accordion-item">
            <h3 onClick={() => toggleSection('installation')} className={openSection === 'installation' ? 'active' : ''}>INSTALLATION BATTERIE</h3>
            <p>Pose d'une batterie rechargeable - 2300 mAh</p>
            {openSection === 'installation' && (
              <div className="accordion-content">
                <ImageL type="installation" images={imagesData.installation} updateImages={updateImages} />
              </div>
            )}

          </div>


          <hr width="250px" align="left" />
          <div className="accordion-item">
            <h3 onClick={() => toggleSection('usb')} className={openSection === 'usb' ? 'active' : ''}>USB-C MOD</h3>
            <p>Remplacement du port de charge par un port USB-C</p>
            {openSection === 'usb' && (
              <div className="accordion-content">
                <ImageL type="usb" images={imagesData.usb} updateImages={updateImages} />
              </div>
            )}
          </div>
          <hr width="250px" align="left" />
          <div className="accordion-item">
            <h3 onClick={() => toggleSection('rgb')} className={openSection === 'rgb' ? 'active' : ''}>Led RGB</h3>
            <p>Pose de LED RGB sur la carte mère.</p>
            {openSection === 'rgb' && (
              <div className="accordion-content">
                <ImageL type="rgb" images={imagesData.rgb} updateImages={updateImages} />
              </div>
            )}
          </div>
          <hr width="250px" align="left" />
          <div className="accordion-item">
            <h3 onClick={() => toggleSection('audio')} className={openSection === 'audio' ? 'active' : ''}>INSTALLATION AUDIO AMP</h3>
            <p>Amplifie le son à 200%</p>
            {openSection === 'audio' && (
              <div className="accordion-content">
                <ImageL type="audio" images={imagesData.audio} updateImages={updateImages} />
              </div>
            )}
          </div>


          <hr width="250px" align="left" />
          <div className="accordion-item">
            <h3 onClick={() => toggleSection('accessoires')} className={openSection === 'accessoires' ? 'active' : ''}>Accessoires</h3>
            <p>Remplacement du port de charge par un port USB-C</p>
            {openSection === 'accessoires' && (
              <div className="accordion-content">
                <ImageL type="accessoires" images={imagesData.accessoires} updateImages={updateImages} />
              </div>
            )}
            </div>

          </div>
          <hr width="250px" align="left" />
          <h5 className="total-price">Prix total des articles : {calculateAllPrice()} €</h5>
          <button class="panierbp">Ajouter au panier</button>
        </div>

          <div className='affichage-view'>
            <div className={`view ${view === 'SIDE' ? 'SIDE' : 'FRONT'}`}>
              <div style={{ position: "relative", width: "800px", height: "800px" }}>
                <img src={view === 'SIDE' ? selectImages.coque.src : selectImages.coque.frontSrc} alt="Coque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                <img src={view === 'SIDE' ? selectImages.bp.src : selectImages.bp.frontSrc} alt="Button" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                <img src={view === 'SIDE' ? selectImages.pads.src : selectImages.pads.frontSrc} alt="pads" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                <img src={view === 'SIDE' ? selectImages.backcoque.src : selectImages.backcoque.frontSrc} alt="Backcoque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                <img src={view === 'SIDE' ? selectImages.screen.src : selectImages.screen.frontSrc} alt="Screen" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              </div>

            </div>
            
            <div className="views-container"> 
                <button className= {view === 'SIDE' ? 'active' : '' } onClick={() => setView('SIDE')}></button>
                <button className={view === 'FRONT' ? 'active' : '' }  onClick={() => setView('FRONT')}></button>
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
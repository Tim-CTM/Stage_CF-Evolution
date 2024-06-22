import React, { useState } from 'react';
import '../CSS/advence.css';
import Header from './Header';
import Footer from './Footer';
import images from '../image/imageadvence.jsx';


const imagesData = {
    bp: [
      { src: images.GA_SP_SBP0, frontSrc: images.GColor_FBP0, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
      { src: images.GA_SP_SBPBlackG, frontSrc: images.GColor_FBPBlackG , className: "bp-base bp-BlackGlass", price: 40, color: "Noir transparent" },
      { src: images.GA_SP_SBPBlack, frontSrc: images.GColor_FBPBlack, className: "bp-base bp-Black", price: 10, color: "Noir" },
      { src: images.GA_SP_SBPBleuG, frontSrc: images.GColor_FBPBleuG, className: "bp-base bp-BleuG", price: null, color: "Bleu transparent" },
      { src: images.GA_SP_SBPBleuS, frontSrc: images.GColor_FBPBleuS, className: "bp-base bp-Bleu", price: null, color: "Bleu Sombre" },
      { src: images.GA_SP_SBPGreenG, frontSrc: images.GColor_FBPGreenG, className: "bp-base bp-VertG", price: null, color: "Vert transparent" },
      { src: images.GA_SP_SBPGris, frontSrc: images.GColor_FBPGris, className: "bp-base bp-Gris", price: null, color: "Gris" },
      { src: images.GA_SP_SBPLemonG, frontSrc: images.GColor_FBPLemonG, className: "bp-base ", price: null, color: "Citron tranparent" },
      { src: images.GA_SP_SBPLemon, frontSrc: images.GColor_FBPLemon, className: "bp-base ", price: null, color: "Citron" },
      { src: images.GA_SP_SBPOrangeG, frontSrc: images.GColor_FBPOrangeG, className: "bp-base bp-OrangeGlass", price: null, color: "Orange transparent"},
      { src: images.GA_SP_SBPPurpleG, frontSrc: images.GColor_FBPPurpleG, className: "bp-base bp-VioletGlass", price: null, color: "Violet transparent" },
      { src: images.GA_SP_SBPRed, frontSrc: images.GColor_FBPRed, className: "bp-base bp-Rouge", price: null, color: "Rouge" },
      { src: images.GA_SP_SBPRose, frontSrc: images.GColor_FBPRose, className: "bp-base bp-Rose", price: null, color: "Rose" },
      { src: images.GA_SP_SBPRoseG, frontSrc: images.GColor_FBPRoseG, className: "bp-base bp-RoseGlass", price: null, color: "Rose transparent" },
      { src: images.GA_SP_SBPWhite, frontSrc: images.GColor_FBPWhite, className: "bp-base bp-Blanc", price: null, color: "Blanc" },
      { src: images.GA_SP_SBPYellow, frontSrc: images.GColor_FBPYellow, className: "bp-base bp-Jaune", price: null, color: "Jaune" },
    ],
    coque: [
      { src: images.GA_SP_SCoque0 , frontSrc: images.GColor_FCoque0, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
      { src: images.GA_SP_SCoqueBleuG , frontSrc: images.GColor_FCoqueBleu, className: "bp-base bp-Bleu ", price: null, color: "Bleu" },
      { src: images.GA_SP_SCoqueYellow , frontSrc: images.GColor_FCoqueYellow, className: "bp-base bp-Jaune  ", price: null, color: "Jaune" },
      { src: images.GA_SP_SCoqueBlackG , frontSrc: images.GColor_FCoqueYellowG, className: "bp-base bp-Jaune  ", price: null, color: "Jaune transparent" },
      { src: images.GA_SP_SCoqueRose , frontSrc: images.GColor_FCoqueWhite, className: "bp-base bp-Blanc ", price: null, color: "Blanc" },
      { src: images.GColor_SCoqueRed , frontSrc: images.GColor_FCoqueRed, className: "bp-base bp-RougeGlass ", price: null, color: "Rouge transparent" },
      { src: images.GA_SP_SCoqueG , frontSrc: images.GColor_FCoqueG, className: "bp-base bp-Verre  ", price: null, color: "Transparent" },
      { src: images.GColor_SCoqueGreenG , frontSrc: images.GColor_FCoqueGreenG, className: "bp-base bp-VertGlass ", price: null, color: "Vert transparent" },
      { src: images.GColor_SCoquePurpleG , frontSrc: images.GColor_FCoquePurpleG, className: "bp-base bp-Violet  ", price: null, color: "Violet transparent" },
      { src: images.GColor_SCoqueBleuG , frontSrc: images.GColor_FCoqueBleuG, className: "bp-base bp-BleuG ", price: null, color: "Bleu transparent" },
      { src: images.GColor_SCoqueBlackG , frontSrc: images.GColor_FCoqueBlackG, className: "bp-base bp-Black" , price: 15, color: "Noir transparent" },
      { src: images.GColor_SCoqueOrange, frontSrc: images.GColor_FCoqueOrange , className: "bp-base bp-Orange", price: null, color: "Orange transparent" },
      { src: images.GColor_SCoqueCyanG , frontSrc: images.GColor_FCoqueCyanG, className: "bp-base bp-Cyan", price: null, color: "Cyan transparent" },
      { src: images.GColor_SCoqueCyan , frontSrc: images.GColor_FCoqueCyan, className: "bp-base bp-Cyan", price: null, color: "Cyan" },
      { src: images.GColor_SCoquePurple , frontSrc: images.GColor_FCoquePurple, className: "bp-base bp-Citron", price: null, color: "" },
      { src: images.GA_SP_SCoqueBlack , frontSrc: images.GColor_FCoqueBlack, className: "bp-base bp-Black" , price: 15, color: "Noir" },
    ],
    baseconsole: [
      { src: null, frontSrc: null, className: "bp-base bp-Blanc ", price: null, color: "Oui" },
      { src: null, frontSrc: null, className: "bp-base bp-Black ", price: 40, color: "Non" },
    ],
    sidebackcoque: [
      { src: images.GA_SP_SBCoque0 , frontSrc: null, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
      { src: images.GA_SP_SBCoqueBlackG, frontSrc:null , className: "bp-base bp-BlackGlass", price: 10, color: "Noir transparent" },
      { src: images.GA_SP_SBCoqueBlack , frontSrc:null,  className: "bp-base bp-Black", price: null, color: "Bleu" },
      { src: images.GA_SP_SBCoqueBleuG , frontSrc: null, className: "bp-base bp-BleuG ", price: null, color: "Bleu transparent" },
      { src: images.GA_SP_SBCoqueCyanG, frontSrc:null , className: "bp-base bp-Cyan ", price: null, color: "Cyan transparent" },
      { src: images.GA_SP_SBCoqueCyan , frontSrc:null , className: "bp-base bp-Turquoise", price: null, color: "Turquoise" },
      { src: images.GA_SP_SBCoqueGreenG, frontSrc: null, className: "bp-base bp-VertG", price: null, color: "Vert transparent" },
      { src: images.GA_SP_SBCoqueOrangeG, frontSrc:null , className: "bp-base bp-Orange", price: null, color: "Orange transparent" },
      { src: images.GA_SP_SBCoquePurpleG , frontSrc: null, className: "bp-base bp-VioletGlass ", price: null, color: "Violet transparent" },
      { src: images.GA_SP_SBCoquePurple , frontSrc:null , className: "bp-base bp-Violet", price: null, color: "Jaune" },
      { src: images.GA_SP_SBCoqueRedG , frontSrc: null, className: "bp-base bp-RougeGlass", price: null, color: "Rouge transparent" },
      { src: images.GA_SP_SBCoqueRose , frontSrc: null, className: "bp-base bp-Rose", price: null, color: "Rose" },
      { src: images.GA_SP_SBCoqueWhite, frontSrc: null, className: "bp-base bp-Blanc", price: null, color: "Blanc" },
      { src: images.GA_SP_SBCoqueYellowG , frontSrc:null , className: "bp-base bp-Jaune-Glass", price: null, color: "Jaune" },
      { src: images.GA_SP_SBCoqueYellow , frontSrc:null , className: "bp-base bp-Jaune", price: null, color: "Jaune" },
      { src: images.GA_SP_SBCoqueG , frontSrc:null , className: "bp-base bp-Glass", price: null, color: "Transparent" },
    ],
    screen: [   
        { src: images.GColor_SScreen0, frontSrc: images.GColor_FScreen0, className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SScreenBleu, frontSrc: images.GColor_FScreenBleu, className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SScreenGreen, frontSrc: images.GColor_FScreenGreen, className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SScreenGris, frontSrc: images.GColor_FScreenGris, className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SScreenOrange, frontSrc: images.GColor_FScreenOrange, className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SScreenRed, frontSrc: images.GColor_FScreenRed, className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SScreenWhite, frontSrc: images.GColor_FScreenWhite, className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SScreenYellow, frontSrc: images.GColor_FScreenYellow, className: "bp-base ", price: null, color: "" },
    ],
    pads: [
      { src: images.GA_SP_SP0, frontSrc: images.GA_SP_FP0, className: "bp-base bp-GrisDMG ", price: null, color: "DMG" },
      { src: images.GA_SP_SPBleu  , frontSrc: images.GA_SP_FPBleu, className: "bp-base bp-Bleu ", price: null, color: "Bleu" },
      { src: images.GA_SP_SPOrange , frontSrc: images.GA_SP_FPOrange, className: "bp-base bp-Bleu ", price: null, color: "Bleu Transparant" },
      { src: images.GA_SP_SPWhite, frontSrc:images.GA_SP_FPWhite , className: "bp-base bp-Glass", price: null, color: "Transparent" },
      { src: images.GA_SP_SPGreen , frontSrc:images.GA_SP_FPGreen, className: "bp-base bp-Vert", price: null, color: "Vert" },
      { src: images.GA_SP_SPPurple , frontSrc: images.GA_SP_FPPurple, className: "bp-base bp-Violet", price: null, color: "Violet" },
      { src: images.GA_SP_SPRed, frontSrc: images.GA_SP_FPRed, className: "bp-base bp-Rouge ", price: null, color: "Rouge" },
      { src: images.GA_SP_SPYellow , frontSrc: images.GA_SP_FPYellow, className: "bp-base bp-Jaune ", price: null, color: "Jaune" },
    ],
    frontbackcoque:[
        { src: images.GA_SP_FBCoque0 , frontSrc: null, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
        { src: images.GA_SP_FBCoqueBlackC , frontSrc:null,  className: "bp-base bp-Black", price: null, color: "Bleu" },
        { src: images.GA_SP_FBCoqueBleuC , frontSrc: null, className: "bp-base bp-BleuG ", price: null, color: "Bleu transparent" },
        { src: images.GA_SP_FBCoqueCyan , frontSrc:null , className: "bp-base bp-Turquoise", price: null, color: "Turquoise" },
        { src: images.GA_SP_FBCoqueGreenG, frontSrc: null, className: "bp-base bp-VertG", price: null, color: "Vert transparent" },
        { src: images.GA_SP_FBCoquePurpleA, frontSrc:null , className: "bp-base bp-Orange", price: null, color: "Orange transparent" },
        { src: images.GA_SP_FBCoquePurpleG , frontSrc: null, className: "bp-base bp-VioletGlass ", price: null, color: "Violet transparent" },
        { src: images.GA_SP_FBCoquePurple , frontSrc:null , className: "bp-base bp-Violet", price: null, color: "Jaune" },
        { src: images.GA_SP_FBCoqueRedG , frontSrc: null, className: "bp-base bp-RougeGlass", price: null, color: "Rouge transparent" },
        { src: images.GA_SP_FBCoqueRose , frontSrc: null, className: "bp-base bp-Rose", price: null, color: "Rose" },
        { src: images.GA_SP_FBCoqueYellow , frontSrc:null , className: "bp-base bp-Jaune", price: null, color: "Jaune" },
        { src: images.GA_SP_FBCoqueG, frontSrc: null, className: "bp-base ", price: null, color: "Blanc" },
    ],
   };

   
 const ImageAll = () => {
    const [selectImages, setSelectImages] = useState({
      bp: imagesData.bp[0],
      coque: imagesData.coque[0],
      baseconsole: imagesData.baseconsole[0],
      sidebackcoque: imagesData.sidebackcoque[0],
      pads: imagesData.pads[0],
      screen: imagesData.screen[0],
      frontbackcoque: imagesData.frontcoque[0],
    });
  
    const [openSection, setOpenSection] = useState('baseconsole');
  
    const updateImages = (type, selectImage) => {
  
      setSelectImages(prevState => ({
        ...prevState,
        [type]: selectImage
      })); 
    };
    
  const [view, setView] = useState('SIDE');


  const calculateAllPrice = () => {
    const { bp, coque, baseconsole, pads, sidebackcoque } = selectImages;
    return basePrice + (bp.price ?? 0) + (coque.price ?? 0) + (baseconsole.price ?? 0) + (pads.price ??0) + (sidebackcoque.price ??0) ;
  };

  const basePrice = 159;


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
          <h1>GameBoy Advence</h1>
        </section>

        <section className="container-perso">
          <div className="option-selection">
            <h2>Personnalisation Gameboy Advence</h2>
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
              <h3 onClick={() => toggleSection('sidebackcoque')} className={openSection === 'sidebackcoque' ? 'active' : ''}>Coque arrière</h3>
              <p>Uniquement pour les couleurs duo</p>
              {openSection === 'sidebackcoque' && (
                <div className="accordion-content">
                  <ImageL type="sidebackcoque" images={imagesData.sidebackcoque} updateImages={updateImages} />
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
          
            </div>
            <h3>USB-C MOD</h3>
            <hr width="250px" align="left" />
            <h3>ACCESSOIRES</h3>
            <hr width="250px" align="left" />
            <h5>Prix total des articles : {calculateAllPrice()} €</h5>
            <button className="panier">Ajouter au panier</button>
          </div>

          <div className='affichage-view'>
            <div className={`view ${view}`}>
                <div style={{ position: "relative", width: "300px", height: "300px" }}>
                    {view === 'SIDE' && (
            <>
              <img src={selectImages.coque.src} alt="Coque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={selectImages.bp.src} alt="Button" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={selectImages.pads.src} alt="Pads" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={images.GColor_SShadow} alt="Shadow" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={selectImages.screen.src} alt="Screen" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={selectImages.coquearriere.src} alt="Coquearriere" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={selectImages.led.src} alt="Led" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={selectImages.laniere.src} alt="Laniere" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
            </>
          )}
          {view === 'FRONT' && (
            <>
              <img src={selectImages.coque.frontSrc} alt="Coque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={selectImages.bp.frontSrc} alt="Button" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={selectImages.pads.frontSrc} alt="Pads" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={images.GColor_FShadow} alt="Shadow" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={selectImages.screen.frontsrc} alt="Screen" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={selectImages.led.frontsrc} alt="Led" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
              <img src={selectImages.laniere.frontsrc} alt="Laniere" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
            </>
          )}
          {view === 'BACK' && (
            <>
            <img src={selectImages.backcoque.src} alt="Screen" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
            <img src={images.GColor_FShadow.src} alt="Shadow" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
            <img src={selectImages.sticker.src} alt="Sticker" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%"  }} />
            <img src={selectImages.laniere.src} alt="Laniere" style={{ position: "relative", top: 0, left: 0, width: "100%", height: "100%" }} />
            </>
          )}
        </div>

        <div className="views-container">
          <button onClick={() => setView('SIDE')}></button>
          <button onClick={() => setView('FRONT')}></button>
          <button onClick={() => setView('BACK')}></button>
        </div>
            </div>
          </div>
        </section>

        <section className="section-bleu">
          <h2>Utilisation</h2> 
        </section>

        <Footer/>
      </div>
    );
  };

  export default ImageAll;
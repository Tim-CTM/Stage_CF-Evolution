import React, { useState } from 'react';
import '../CSS/gcolor.css';
import Header from './Header';
import Footer from './Footer';
import images from '../image/imagegcolor.jsx';



const imagesData = {
    bp: [
      { src: images.GColor_BP0, frontSrc: images.GColor_FBP0, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
      { src: images.GColor_BPBlackG, frontSrc: images.GColor_FBPBlackG , className: "bp-base bp-BlackGlass", price: 40, color: "Noir transparent" },
      { src: images.GColor_BPBlack, frontSrc: images.GColor_FBPBlack, className: "bp-base bp-Black", price: 10, color: "Noir" },
      { src: images.GColor_BPBleuG, frontSrc: images.GColor_FBPBleuG, className: "bp-base bp-BleuG", price: null, color: "Bleu transparent" },
      { src: images.GColor_BPBleuS, frontSrc: images.GColor_FBPBleuS, className: "bp-base bp-Bleu", price: null, color: "Bleu Sombre" },
      { src: images.GColor_BPGreenG, frontSrc: images.GColor_FBPGreenG, className: "bp-base bp-VertG", price: null, color: "Vert transparent" },
      { src: images.GColor_BPGris, frontSrc: images.GColor_FBPGris, className: "bp-base bp-Gris", price: null, color: "Gris" },
      { src: images.GColor_BPLemonG, frontSrc: images.GColor_FBPLemonG, className: "bp-base ", price: null, color: "Citron tranparent" },
      { src: images.GColor_BPLemon, frontSrc: images.GColor_FBPLemon, className: "bp-base ", price: null, color: "Citron" },
      { src: images.GColor_BPOrangeG, frontSrc: images.GColor_FBPOrangeG, className: "bp-base bp-OrangeGlass", price: null, color: "Orange transparent"},
      { src: images.GColor_BPPurpleG, frontSrc: images.GColor_FBPPurpleG, className: "bp-base bp-VioletGlass", price: null, color: "Violet transparent" },
      { src: images.GColor_BPRed, frontSrc: images.GColor_FBPRed, className: "bp-base bp-Rouge", price: null, color: "Rouge" },
      { src: images.GColor_BPRose, frontSrc: images.GColor_FBPRose, className: "bp-base bp-Rose", price: null, color: "Rose" },
      { src: images.GColor_BPRoseG, frontSrc: images.GColor_FBPRoseG, className: "bp-base bp-RoseGlass", price: null, color: "Rose transparent" },
      { src: images.GColor_BPWhite, frontSrc: images.GColor_FBPWhite, className: "bp-base bp-Blanc", price: null, color: "Blanc" },
      { src: images.GColor_BPYellow, frontSrc: images.GColor_FBPYellow, className: "bp-base bp-Jaune", price: null, color: "Jaune" },
      { src: images.GColor_BPG, frontSrc: images.GColor_FBPG, className: "bp-base bp-Glass", price: null, color: "Transparent" },
    ],
    coque: [
      { src: images.GColor_SCoque0 , frontSrc: images.GColor_FCoque0, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
      { src: images.GColor_SCoqueBleuG , frontSrc: images.GColor_FCoqueBleu, className: "bp-base bp-Bleu ", price: null, color: "Bleu" },
      { src: images.GColor_SCoqueYellow , frontSrc: images.GColor_FCoqueYellow, className: "bp-base bp-Jaune  ", price: null, color: "Jaune" },
      { src: images.GColor_SCoqueYellowG , frontSrc: images.GColor_FCoqueYellowG, className: "bp-base bp-Jaune  ", price: null, color: "Jaune transparent" },
      { src: images.GColor_SCoqueWhite , frontSrc: images.GColor_FCoqueWhite, className: "bp-base bp-Blanc ", price: null, color: "Blanc" },
      { src: images.GColor_SCoqueRed , frontSrc: images.GColor_FCoqueRed, className: "bp-base bp-RougeGlass ", price: null, color: "Rouge transparent" },
      { src: images.GColor_SCoqueG , frontSrc: images.GColor_FCoqueG, className: "bp-base bp-Verre  ", price: null, color: "Transparent" },
      { src: images.GColor_SCoqueGreenG , frontSrc: images.GColor_FCoqueGreenG, className: "bp-base bp-VertGlass ", price: null, color: "Vert transparent" },
      { src: images.GColor_SCoquePurpleG , frontSrc: images.GColor_FCoquePurpleG, className: "bp-base bp-Violet  ", price: null, color: "Violet transparent" },
      { src: images.GColor_SCoqueBleuG , frontSrc: images.GColor_FCoqueBleuG, className: "bp-base bp-BleuG ", price: null, color: "Bleu transparent" },
      { src: images.GColor_SCoqueBlackG , frontSrc: images.GColor_FCoqueBlackG, className: "bp-base bp-Black" , price: 15, color: "Noir transparent" },
      { src: images.GColor_SCoqueOrange, frontSrc: images.GColor_FCoqueOrange , className: "bp-base bp-Orange", price: null, color: "Orange transparent" },
      { src: images.GColor_SCoqueCyanG , frontSrc: images.GColor_FCoqueCyanG, className: "bp-base bp-Cyan", price: null, color: "Cyan transparent" },
      { src: images.GColor_SCoqueCyan , frontSrc: images.GColor_FCoqueCyan, className: "bp-base bp-Cyan", price: null, color: "Cyan" },
      { src: images.GColor_SCoquePurple , frontSrc: images.GColor_FCoquePurple, className: "bp-base bp-Citron", price: null, color: "" },
      { src: images.GColor_SCoqueBlack , frontSrc: images.GColor_FCoqueBlack, className: "bp-base bp-Black" , price: 15, color: "Noir" },
    ],
    baseconsole: [
      { src: null, frontSrc: null, className: "bp-base bp-Blanc ", price: null, color: "Oui" },
      { src: null, frontSrc: null, className: "bp-base bp-Black ", price: 40, color: "Non" },
    ],
    coquearriere: [
      { src: images.GColor_SBCoque0 , frontSrc: null, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
      { src: images.GColor_SBCoqueBlackG, frontSrc:null , className: "bp-base bp-BlackGlass", price: 10, color: "Noir transparent" },
      { src: images.GColor_SBCoqueBlack , frontSrc:null,  className: "bp-base bp-Black", price: null, color: "Bleu" },
      { src: images.GColor_SBCoqueBleuG , frontSrc: null, className: "bp-base bp-BleuG ", price: null, color: "Bleu transparent" },
      { src: images.GColor_SBCoqueCyanG, frontSrc:null , className: "bp-base bp-Cyan ", price: null, color: "Cyan transparent" },
      { src: images.GColor_SBCoqueCyan , frontSrc:null , className: "bp-base bp-Turquoise", price: null, color: "Turquoise" },
      { src: images.GColor_SBCoqueGreenG, frontSrc: null, className: "bp-base bp-VertG", price: null, color: "Vert transparent" },
      { src: images.GColor_SBCoqueOrangeG, frontSrc:null , className: "bp-base bp-Orange", price: null, color: "Orange transparent" },
      { src: images.GColor_SBCoquePurpleG , frontSrc: null, className: "bp-base bp-VioletGlass ", price: null, color: "Violet transparent" },
      { src: images.GColor_SBCoquePurple , frontSrc:null , className: "bp-base bp-Violet", price: null, color: "Jaune" },
      { src: images.GColor_SBCoqueRedG , frontSrc: null, className: "bp-base bp-RougeGlass", price: null, color: "Rouge transparent" },
      { src: images.GColor_SBCoqueRose , frontSrc: null, className: "bp-base bp-Rose", price: null, color: "Rose" },
      { src: images.GColor_SBCoqueWhite, frontSrc: null, className: "bp-base bp-Blanc", price: null, color: "Blanc" },
      { src: images.GColor_SBCoqueYellowG , frontSrc:null , className: "bp-base bp-Jaune-Glass", price: null, color: "Jaune" },
      { src: images.GColor_SBCoqueYellow , frontSrc:null , className: "bp-base bp-Jaune", price: null, color: "Jaune" },
      { src: images.GColor_SBCoqueG , frontSrc:null , className: "bp-base bp-Glass", price: null, color: "Transparent" },
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
      { src: images.GColor_SP0 , frontSrc: images.GColor_SP0, className: "bp-base bp-GrisDMG ", price: null, color: "DMG" },
      { src: images.GColor_SPBlack , frontSrc:images.GColor_SPBlack,  className: "bp-base bp-Black  ", price: 30, color: "Black" },
      { src: images.GColor_SPBleu  , frontSrc: images.GColor_SPBleu, className: "bp-base bp-Bleu ", price: null, color: "Bleu" },
      { src: images.GColor_SPBleuG  , frontSrc: images.GColor_SPBleuG, className: "bp-base bp-Bleu ", price: null, color: "Bleu Transparant" },
      { src: images.GColor_SPG, frontSrc:images.GColor_SPG , className: "bp-base bp-Glass", price: null, color: "Transparent" },
      { src: images.GColor_SPGreen , frontSrc:images.GColor_SPLemon, className: "bp-base bp-Vert", price: null, color: "Vert" },
      { src: images.GColor_SPPurple , frontSrc: images.GColor_SPPurple, className: "bp-base bp-Violet", price: null, color: "Violet" },
      { src: images.GColor_SPRed, frontSrc: images.DGColor_SPRed, className: "bp-base bp-Rouge ", price: null, color: "Rouge" },
      { src: images.GColor_SPRose, frontSrc: images.GColor_SPRose , className: "bp-base bp-Rose", price: null, color: "Rose" },
      { src: images.GColor_SPYellow , frontSrc: images.GColor_SPYellow, className: "bp-base bp-Jaune ", price: null, color: "Jaune" },
    ],
    backcoque:[
        { src: images.GColor_BCoque0 , frontSrc: null, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
        { src: images.GColor_BCoqueBlackG, frontSrc:null , className: "bp-base bp-BlackGlass", price: 10, color: "Noir transparent" },
        { src: images.GColor_BCoqueBlack , frontSrc:null,  className: "bp-base bp-Black", price: null, color: "Bleu" },
        { src: images.GColor_BCoqueBleuG , frontSrc: null, className: "bp-base bp-BleuG ", price: null, color: "Bleu transparent" },
        { src: images.GColor_BCoqueCyanG, frontSrc:null , className: "bp-base bp-Cyan ", price: null, color: "Cyan transparent" },
        { src: images.GColor_BCoqueCyan , frontSrc:null , className: "bp-base bp-Turquoise", price: null, color: "Turquoise" },
        { src: images.GColor_BCoqueGreenG, frontSrc: null, className: "bp-base bp-VertG", price: null, color: "Vert transparent" },
        { src: images.GColor_BCoqueOrangeG, frontSrc:null , className: "bp-base bp-Orange", price: null, color: "Orange transparent" },
        { src: images.GColor_BCoquePurpleG , frontSrc: null, className: "bp-base bp-VioletGlass ", price: null, color: "Violet transparent" },
        { src: images.GColor_BCoquePurple , frontSrc:null , className: "bp-base bp-Violet", price: null, color: "Jaune" },
        { src: images.GColor_BCoqueRedG , frontSrc: null, className: "bp-base bp-RougeGlass", price: null, color: "Rouge transparent" },
        { src: images.GColor_BCoqueRose , frontSrc: null, className: "bp-base bp-Rose", price: null, color: "Rose" },
        { src: images.GColor_BCoqueWhite, frontSrc: null, className: "bp-base bp-Blanc", price: null, color: "Blanc" },
        { src: images.GColor_BCoqueYellowG , frontSrc:null , className: "bp-base bp-Jaune-Glass", price: null, color: "Jaune transparent" },
        { src: images.GColor_BCoqueYellow , frontSrc:null , className: "bp-base bp-Jaune", price: null, color: "Jaune" },
        { src: images.GColor_BCoqueG , frontSrc:null , className: "bp-base bp-Glass", price: null, color: "Transparent" },
    ],
    led :[
        { src: images.GColor_SLed0 , frontSrc: images.GColor_FLed0 , className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SLedBleu , frontSrc: images.GColor_FLedBleu, className: "bp-base bp-Bleu", price: null, color: "" },
        { src: images.GColor_SLedGreen , frontSrc: images.GColor_FLedGreen , className: "bp-base bp-Vert", price: null, color: "" },
        { src: images.GColor_SLedYellow , frontSrc: images.GColor_FLedYellow , className: "bp-base bp-Jaune", price: null, color: "" },
        { src: images.GColor_SLedWhite , frontSrc: images.GColor_FLedWhite  , className: "bp-base bp-Blanc", price: null, color: "" },
    ],
    sticker:[
        { src: images.GColor_StickerB , frontSrc: null , className: "bp-base ", price: null, color: "" },
        { src: images.GColor_StickerW , frontSrc: null , className: "bp-base ", price: null, color: "" },
    ],
    laniere:[
        { src: images.GColor_SStrap0 , frontSrc: images.Gcolor_FStrap0 , className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SStrapBleuC , frontSrc: images.Gcolor_FStrapBleuC  , className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SStrapBleu , frontSrc: images.Gcolor_FStrapBleu, className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SStrapLemon, frontSrc: images.Gcolor_FStrapLemon , className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SStrapOrange , frontSrc: images.Gcolor_FStrapOrange , className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SStrapPurple, frontSrc: images.Gcolor_FStrapPurple , className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SStrapRed , frontSrc: images.Gcolor_FStrapRed, className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SStrapRoseC , frontSrc: images.Gcolor_FStrapRoseC , className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SStrapRose , frontSrc: images.Gcolor_FStrapRose , className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SStrapWhite  , frontSrc: images.Gcolor_FStrapWhite  , className: "bp-base ", price: null, color: "" },
        { src: images.GColor_SStrapYellow  , frontSrc: images.Gcolor_FStrapYellow  , className: "bp-base ", price: null, color: "" },
    ]
   };

   
 const ImageAll = () => {
    const [selectImages, setSelectImages] = useState({
      bp: imagesData.bp[0],
      coque: imagesData.coque[0],
      baseconsole: imagesData.baseconsole[0],
      coquearriere: imagesData.coquearriere[0],
      pads: imagesData.pads[0],
      screen: imagesData.screen[0],
      backcoque: imagesData.backcoque[0],
      led: imagesData.led[0],
      sticker: imagesData.sticker[0],
      laniere: imagesData.laniere[0],
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
    const { bp, coque, baseconsole, pads, coquearriere } = selectImages;
    return basePrice + (bp.price ?? 0) + (coque.price ?? 0) + (baseconsole.price ?? 0) + (pads.price ??0) + (coquearriere.price ??0) ;
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
          <h1>GameBoy Color</h1>
        </section>

        <section className="container-perso">
          <div className="option-selection">
            <h2>Personnalisation Gameboy Color</h2>
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
          <h3 onClick={() => toggleSection('led')} className={openSection === 'led' ? 'active' : ''}>Led</h3>
              {openSection === 'led' && (
                <div className="accordion-content">
                  <ImageL type="led" images={imagesData.led} updateImages={updateImages} />
                </div>
              )}
            <hr width="250px" align="left" />
            
            <div className="accordion-item">
          <h3 onClick={() => toggleSection('sticker')} className={openSection === 'sticker' ? 'active' : ''}>Sticker</h3>
              {openSection === 'sticker' && (
                <div className="accordion-content">
                  <ImageL type="sticker" images={imagesData.sticker} updateImages={updateImages} />
                </div>
              )}
              <hr width="250px" align="left" /></div>

              <div className="accordion-item">
          <h3 onClick={() => toggleSection('laniere')} className={openSection === 'laniere' ? 'active' : ''}>Lanière</h3>
              {openSection === 'laniere' && (
                <div className="accordion-content">
                  <ImageL type="laniere" images={imagesData.laniere} updateImages={updateImages} />
                </div>
              )}
              <hr width="250px" align="left" /></div>
           


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
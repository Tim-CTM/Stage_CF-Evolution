import React, { useState } from 'react';
import '../CSS/gcolor.css';
import Header from './Header';
import Footer from './Footer';
import images from '../image/imagegcolor.jsx';

const imagesData = {
    bp: [
      { src: images.GColor_BP0, frontSrc: images.GColor_FBP0, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
      { src: images.GColor_BPBlackG, frontSrc: images.GColor_FBPBlackG , className: "bp-base bp-BlackGlass", price: null, color: "Noir transparent" },
      { src: images.GColor_BPBlack, frontSrc: images.GColor_FBPBlack, className: "bp-base bp-Black", price: null, color: "Noir" },
      { src: images.GColor_BPBleuG, frontSrc: images.GColor_FBPBleu, className: "bp-base bp-BleuG", price: null, color: "Bleu transparent" },
      { src: images.GColor_BPBleuS, frontSrc: images.GColor_FBPBleuS, className: "bp-base bp-Bleu", price: null, color: "Bleu Sombre" },
      { src: images.GColor_BPGreenG, frontSrc: images.GColor_FBPGreenG, className: "bp-base bp-VertG", price: null, color: "Vert transparent" },
      { src: images.GColor_BPGris, frontSrc: images.GColor_FBPGris, className: "bp-base bp-Gris", price: null, color: "Gris" },
      { src: images.GColor_BPLemonG, frontSrc: images.GColor_FBPLemonG, className: "bp-base bp-LemonGlass", price: null, color: "Citron tranparent" },
      { src: images.GColor_BPLemon, frontSrc: images.GColor_FBPLemon, className: "bp-base bp-Lemon", price: null, color: "Citron" },
      { src: images.GColor_BPOrangeG, frontSrc: images.GColor_FBPOrangeG, className: "bp-base bp-OrangeGlass", price: null, color: "Orange transparent"},
      { src: images.GColor_BPPurpleG, frontSrc: images.GColor_FBPPurple, className: "bp-base bp-VioletGlass", price: null, color: "Violet transparent" },
      { src: images.GColor_BPRed, frontSrc: images.GColor_FBPRed, className: "bp-base bp-Rouge", price: null, color: "Rouge" },
      { src: images.GColor_BPRose, frontSrc: images.GColor_FBPRose, className: "bp-base bp-Rose", price: null, color: "Rose" },
      { src: images.GColor_BPRoseG, frontSrc: images.GColor_FBPRoseG, className: "bp-base bp-RoseGlass", price: null, color: "Rose transparent" },
      { src: images.GColor_BPWhite, frontSrc: images.GColor_FBPWhite, className: "bp-base bp-Blanc", price: null, color: "Blanc" },
      { src: images.GColor_BPYellow, frontSrc: images.GColor_FBPYellow, className: "bp-base bp-Jaune", price: null, color: "Jaune" },
      { src: images.GColor_BPG, frontSrc: images.GColor_FBPG, className: "bp-base bp-Glass", price: null, color: "Transparent" },
    ],
    coque: [
      { src: images.GColor_SCoque0 , frontSrc: images.GColor_FCoque0,  className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
      { src: images.GColor_SCoqueBleuG , frontSrc: images.GColor_FCoqueBleuG, className: "bp-base bp-Bleu ", price: null, color: "Bleu" },
      { src: images.GColor_SCoqueYellow , frontSrc: images.GColor_FCoqueYellow,  className: "bp-base bp-Jaune  ", price: null, color: "Jaune" },
      { src: images.GColor_SCoqueYellowG , frontSrc: images.GColor_FCoqueYellowG,className: "bp-base bp-JauneGlass  ", price: null, color: "Jaune transparent" },
      { src: images.GColor_SCoqueWhite , frontSrc: images.GColor_FCoqueWhite, className: "bp-base bp-Blanc ", price: null, color: "Blanc" },
      { src: images.GColor_SCoqueRedG , frontSrc: images.GColor_FCoqueRedG,className: "bp-base bp-RougeGlass ", price: null, color: "Rouge transparent" },
      { src: images.GColor_SCoqueG , frontSrc: images.GColor_FCoqueG, className: "bp-base bp-Glass  ", price: null, color: "Transparent" },
      { src: images.GColor_SCoqueGreenG , frontSrc: images.GColor_FCoqueGreenG,  className: "bp-base bp-VertG ", price: null, color: "Vert transparent" },
      { src: images.GColor_SCoquePurpleG , frontSrc: images.GColor_FCoquePurpleG,  className: "bp-base bp-Violet  ", price: null, color: "Violet transparent" },
      { src: images.GColor_SCoqueRose , frontSrc: images.GColor_FCoqueRose,  className: "bp-base bp-Rose ", price: null, color: "Rose" },
      { src: images.GColor_SCoqueBlackG , frontSrc: images.GColor_FCoqueBlackG, className: "bp-base bp-BlackGlass" , price: null, color: "Noir transparent" },
      { src: images.GColor_SCoqueOrangeG, frontSrc: images.GColor_FCoqueOrangeG ,  className: "bp-base bp-OrangeGlass", price: null, color: "Orange transparent" },
      { src: images.GColor_SCoqueCyanG , frontSrc: images.GColor_FCoqueCyanG, className: "bp-base bp-Turquoise", price: null, color: "Cyan transparent" },
      { src: images.GColor_SCoqueCyan , frontSrc: images.GColor_FCoqueCyan, className: "bp-base bp-Cyan", price: null, color: "Cyan" },
      { src: images.GColor_SCoquePurple , frontSrc: images.GColor_FCoquePurple, className: "bp-base bp-Violet", price: null, color: "Violet" },
      { src: images.GColor_SCoqueBlack , frontSrc: images.GColor_FCoqueBlack, className: "bp-base bp-Black" , price: null, color: "Noir" },
    ],
    baseconsole: [
      { src: null, frontSrc: null, className: "bp-base bp-Blanc ", price: null, color: "Oui" },
      { src: null, frontSrc: null, className: "bp-base bp-Black ", price: 40, color: "Non" },
    ],
    coquearriere: [
      { src: images.GColor_BCoque0 , backSrc: images.GColor_SBCoque0, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
      { src: images.GColor_BCoqueBlackG, backSrc: images.GColor_SBCoqueBlackG,  className: "bp-base bp-BlackGlass", price: 11.90, color: "Noir transparent" },
      { src: images.GColor_BCoqueBlack , backSrc:images.GColor_SBCoqueBlack,  className: "bp-base bp-Black", price: 11.90, color: "Bleu" },
      { src: images.GColor_BCoqueBleuG , backSrc: images.GColor_SBCoqueBleuG, className: "bp-base bp-BleuG ", price: 11.90, color: "Bleu transparent" },
      { src: images.GColor_BCoqueCyanG,  backSrc:images.GColor_SBCoqueCyanG,className: "bp-base bp-Cyan ", price: 11.90, color: "Cyan transparent" },
      { src: images.GColor_BCoqueCyan ,backSrc:images.GColor_SBCoqueCyan,  className: "bp-base bp-Turquoise", price: 11.90, color: "Turquoise" }, 
      { src: images.GColor_BCoqueGreenG,  backSrc: images.GColor_SBCoqueGreenG , className: "bp-base bp-VertG", price: 11.90, color: "Vert transparent" },
      { src: images.GColor_BCoqueOrangeG,backSrc:images.GColor_SBCoqueOrangeG , className: "bp-base bp-Orange", price: 11.90, color: "Orange transparent" },
      { src: images.GColor_BCoquePurpleG , backSrc: images.GColor_SBCoquePurpleG, className: "bp-base bp-VioletGlass ", price: 11.90, color: "Violet transparent" },
      { src: images.GColor_BCoquePurple , backSrc:images.GColor_SBCoquePurple ,  className: "bp-base bp-Violet", price: 11.90, color: "Violet" },
      { src: images.GColor_BCoqueRedG , backSrc: images.GColor_SBCoqueRedG,  className: "bp-base bp-RougeGlass", price: 11.90, color: "Rouge transparent" },
      { src: images.GColor_BCoqueRose , backSrc: images.GColor_SBCoqueRose,className: "bp-base bp-Rose", price: 11.90, color: "Rose" },
      { src: images.GColor_BCoqueWhite,  backSrc: images.GColor_SBCoqueWhite,className: "bp-base bp-Blanc", price: 11.90, color: "Blanc" },
      { src: images.GColor_BCoqueYellowG , backSrc:images.GColor_SBCoqueYellowG,  className: "bp-base bp-JauneGlass", price: 11.90, color: "Jaune transparent" },
      { src: images.GColor_BCoqueYellow , backSrc:images.GColor_SBCoqueYellow,className: "bp-base bp-Jaune", price: 11.90, color: "Jaune" },
      { src: images.GColor_BCoqueG , backSrc:images.GColor_SBCoqueG, className: "bp-base bp-Glass", price: 11.90, color: "Transparent" },
    ],
    screen: [   
        { src: images.GColor_SScreen0, frontSrc: images.GColor_FScreen0, className: "bp-base bp-GrisDMG", price: null, color: "Gris" },
        { src: images.GColor_SScreenBleu, frontSrc: images.GColor_FScreenBleu, className: "bp-base bp-Bleu", price: null, color: "Bleu" },
        { src: images.GColor_SScreenGreen, frontSrc: images.GColor_FScreenGreen, className: "bp-base bp-Vert ", price: null, color: "Vert" },
        { src: images.GColor_SScreenGris, frontSrc: images.GColor_FScreenBlack, className: "bp-base bp-Black", price: null, color: "Noir" },
        { src: images.GColor_SScreenOrange, frontSrc: images.GColor_FScreenOrange, className: "bp-base bp-Orange", price: null, color: "Orange" },
        { src: images.GColor_SScreenRed, frontSrc: images.GColor_FScreenRed, className: "bp-base bp-Rouge", price: null, color: "Rouge" },
        { src: images.GColor_SScreenWhite, frontSrc: images.GColor_FScreenWhite, className: "bp-base bp-Blanc ", price: null, color: "Blanc" },
        { src: images.GColor_SScreenYellow, frontSrc: images.GColor_FScreenYellow, className: "bp-base bp-Jaune", price: null, color: "Jaune" },
    ],
    pads: [
      { src: images.GColor_SPBlackG  , frontSrc: images.GColor_FPBlackG, className: "bp-base bp-BlackGlass ", price: null, color: "Black transparent" },
      { src: images.GColor_SPBleu  , frontSrc: images.GColor_FPBleu, className: "bp-base bp-Bleu ", price: null, color: "Bleu" },
      { src: images.GColor_SPBleuC  , frontSrc: images.GColor_FPBleuC, className: "bp-base bp-BleuEclair ", price: null, color: "Bleu Clair" },
      { src: images.GColor_SPGreenG  , frontSrc: images.GColor_FPGreenG , className: "bp-base bp-VertG ", price: null, color: "Vert transparent" },
      { src: images.GColor_SPGreen , frontSrc: images.GColor_FPGreen, className: "bp-base  bp-Vert ", price: null, color: "Vert" },
      { src: images.GColor_SPLemon , frontSrc:images.GColor_FPLemon, className: "bp-base bp-Lemon", price: null, color: "Citron" },
      { src: images.GColor_SPPurple , frontSrc: images.GColor_FPPurple, className: "bp-base bp-Violet", price: null, color: "Violet" },
      { src: images.GColor_SPRoseG, frontSrc: images.GColor_FPRoseG , className: "bp-base bp-RoseGlass", price: null, color: "Rose transparent" },
      { src: images.GColor_SPRose, frontSrc: images.GColor_FPRose , className: "bp-base bp-Rose", price: null, color: "Rose" },
      { src: images.GColor_SPWhite, frontSrc: images.GColor_FPWhite , className: "bp-base bp-Blanc", price: null, color: "Blanc" },
      { src: images.GColor_SPWhiteG, frontSrc: images.GColor_FPWhiteG, className: "bp-base bp-Glass", price: null, color: "Blanc transparent" },
      { src: images.GColor_SPYellow , frontSrc: images.GColor_FPYellow, className: "bp-base bp-Jaune ", price: null, color: "Jaune" },
    ],

    led :[
        { src: images.GColor_SLed0 , frontSrc: images.GColor_FLed0 , className: "bp-base bp-Rouge", price: null, color: "Rouge" },
        { src: images.GColor_SLedBleu , frontSrc: images.GColor_FLedBleu, className: "bp-base bp-Bleu", price: 9.90, color: "Bleu" },
        { src: images.GColor_SLedGreen , frontSrc: images.GColor_FLedGreen , className: "bp-base bp-Vert", price: 9.90, color: "Vert" },
        { src: images.GColor_SLedYellow , frontSrc: images.GColor_FLedYellow , className: "bp-base bp-Jaune", price: 9.90, color: "Jaune" },
        { src: images.GColor_SLedWhite , frontSrc: images.GColor_FLedWhite  , className: "bp-base bp-Blanc", price: 9.90, color: "Blanc" },
    ],
    sticker:[
        { src: images.GColor_StickerB , frontSrc: null , className: "bp-base bp-Black ", price: null, color: "Noir" },
        { src: images.GColor_StickerW , frontSrc: null , className: "bp-base ", price: null, color: "Blanc" },
    ],
    laniere:[
        { src: images.GColor_SStrap0 , frontSrc: images.GColor_FStrap0 , className: "bp-base bp-Black", price: null, color: "Noir" },
        { src: images.GColor_SStrapBleuC , frontSrc: images.GColor_FStrapBleuC  , className: "bp-base bp-BleuEclair", price: null, color: "Bleu clair" },
        { src: images.GColor_SStrapBleu , frontSrc: images.GColor_FStrapBleu, className: "bp-base bp-Bleu", price: null, color: "Bleu" },
        { src: images.GColor_SStrapLemon, frontSrc: images.GColor_FStrapLemon , className: "bp-base bp-Lemon", price: null, color: "Citron" },
        { src: images.GColor_SStrapOrange , frontSrc: images.GColor_FStrapOrange , className: "bp-base bp-Orange", price: null, color: "Orange" },
        { src: images.GColor_SStrapPurple, frontSrc: images.GColor_FStrapPurple , className: "bp-base bp-Violet", price: null, color: "Violet" },
        { src: images.GColor_SStrapRed , frontSrc: images.GColor_FStrapRed, className: "bp-base bp-Rouge", price: null, color: "Rouge" },
        { src: images.GColor_SStrapRoseC , frontSrc: images.GColor_FStrapRoseC , className: "bp-base bp-RoseClair", price: null, color: "Rose Clair" },
        { src: images.GColor_SStrapRose , frontSrc: images.GColor_FStrapRose , className: "bp-base bp-Rose", price: null, color: "Rose" },
        { src: images.GColor_SStrapWhite  , frontSrc: images.GColor_FStrapWhite  , className: "bp-base bp-Blanc", price: null, color: "Blanc" },
        { src: images.GColor_SStrapYellow  , frontSrc: images.GColor_FStrapYellow  , className: "bp-base bp-Jaune", price: null, color: "Jaune" },
    ],
    usb: [   
      { src: null, frontSrc: null, className: "bp-base bp-Blanc ", price: null, color: "Aucun" },
      { src: null, frontSrc: null, className: "bp-base bp-Black", price: 40, color: "Batterie" },
    ],
    rgb: [   
    { src: null, frontSrc: null, className: "bp-base bp-Blanc ", price: null, color: "Aucun" },
    { src: null, frontSrc: null, className: "bp-base bp-Black", price: 50, color: "Led RGB" },
  ],
  accessoires: [   
    { src: null, frontSrc: null, className: "bp-base bp-Black", price: 8.90, color: "Coque-Silicone" },
    { src: null, frontSrc: null, className: "bp-base bp-Black", price: 5.90, color: "Verre trempé" },
    { src: null, frontSrc: null, className: "bp-base bp-Black", price: 12.50, color: "Sacoche" },
  ],
   };

   
 const ImageAll = () => {
    const [selectImages, setSelectImages] = useState({
      bp: imagesData.bp[0],
      coque: imagesData.coque[0],
      coquearriere: imagesData.coquearriere[0],
      baseconsole: imagesData.baseconsole[0],
      pads: imagesData.pads[0],
      screen: imagesData.screen[0],
      led: imagesData.led[0],
      sticker: imagesData.sticker[0],
      laniere: imagesData.laniere[0],
      usb: imagesData.usb[0],
      rgb: imagesData.rgb[0],
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
    
  const [view, setView] = useState('FRONT');



  const calculateAllPrice = () => {
    const { bp, coque, baseconsole, pads, coquearriere, usb, rgb, accessoires } = selectImages;
    const accessoiresTotalPrice = accessoires.reduce((total, item) => total + (item.price ?? 0), 0);
    
    return (
      basePrice +
      (bp.price ?? 0) +
      (coque.price ?? 0) +
      (baseconsole.price ?? 0) +
      (pads.price ?? 0) +
      (coquearriere.price ?? 0) +
      (rgb.price ?? 0) +
      (usb.price ?? 0) +
      accessoiresTotalPrice
    );
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
           
              <div className="accordion-item">
          <h3 onClick={() => toggleSection('screen')} className={openSection === 'screen' ? 'active' : ''}>Ecran IPS </h3>
              {openSection === 'screen' && (
                <div className="accordion-content">
                  <ImageL type="screen" images={imagesData.screen} updateImages={updateImages} />
                </div>
              )}
              <hr width="250px" align="left" /></div>


 
            <div className="accordion-item">
          <h3 onClick={() => toggleSection('usb')} className={openSection === 'usb' ? 'active' : ''}>Installation batterie </h3>
              {openSection === 'usb' && (
                <div className="accordion-content">
                  <ImageL type="usb" images={imagesData.usb} updateImages={updateImages} />
                </div>
              )}
              <hr width="250px" align="left" /></div>
              </div>        
            <div className="accordion-item">
          <h3 onClick={() => toggleSection('rgb')} className={openSection === 'rgb' ? 'active' : ''}>Installation LED RGB</h3>
              {openSection === 'rgb' && (
                <div className="accordion-content">
                  <ImageL type="rgb" images={imagesData.rgb} updateImages={updateImages} />
                </div>
              )}
              <hr width="250px" align="left" /></div>

              <div className="accordion-item">
          <h3 onClick={() => toggleSection('accessoires')} className={openSection === 'accessoires' ? 'active' : ''}>Accessoires</h3>
              {openSection === 'accessoires' && (
                <div className="accordion-content">
                  <ImageL type="accessoires" images={imagesData.accessoires} />
                </div>
              )}
              <hr width="250px" align="left" /></div>
              </div>
              <h5 className="total-price">Prix total des articles : {calculateAllPrice()} €</h5>
            <button className="panierbp">Ajouter au panier</button>
          </div>

          <div className='affichage-view'>
            <div className={`view ${view === 'FRONT' ? 'FRONT' : view === 'SIDE' ? 'SIDE' : 'BACK'}`}>
                <div style={{ position: "relative", width: "800px", height: "800px" }}>
                  {view === 'FRONT' && (
                    <>
                      <img src={selectImages.coque.frontSrc} alt="Coque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                      <img src={selectImages.bp.frontSrc} alt="Button" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                      <img src={selectImages.pads.frontSrc} alt="Pads" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                      <img src={images.GColor_FShadow} alt="Shadow" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                      <img src={selectImages.screen.frontSrc} alt="Screen" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                      <img src={selectImages.led.frontSrc} alt="Led" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                      <img src={selectImages.laniere.frontSrc} alt="Laniere" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                    </>
                  )}
                  <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    {view === 'SIDE' && (
                      <>
                        <img src={selectImages.coque.src} alt="Coque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 2 }} />
                        <img src={selectImages.bp.src} alt="Button" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 3 }} />
                        <img src={selectImages.pads.src} alt="Pads" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 4 }} />
                        <img src={images.GColor_SShadow} alt="Shadow" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 5 }} />
                        <img src={selectImages.screen.src} alt="Screen" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 6 }} />
                        <img src={selectImages.coquearriere.backSrc} alt="Coquearriere" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 7 }} />
                        <img src={selectImages.led.src} alt="Led" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 8 }} />
                        <img src={selectImages.laniere.src} alt="Laniere" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }} />
                      </>
                  )}

                  {view === 'BACK' && (
                    <>
                    <img src={selectImages.coquearriere.src} alt="Backcoque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                    <img src={images.GColor_FShadow} alt="Shadow" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                    <img src={selectImages.sticker.src} alt="Sticker" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%"  }} />
                    </>
                  )}
                  </div>
                </div>
              </div>
              <div className="views-container">
              <button className={view === 'FRONT' ? 'active' : '' } onClick={() => setView('FRONT')}></button>
                <button className={view === 'SIDE' ? 'active' : '' } onClick={() => setView('SIDE')}></button>
                <button className={view === 'BACK' ? 'active' : '' } onClick={() => setView('BACK')}></button>
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
              <li>Chaque console intègre un pavé tactile qui se situe en haut de la console au milieu. </li>
              <li>Toucher une fois pour augmenter la luminosité. L’écran possède 8 niveaux d’intensité.</li>
            </ul>
          </div>
          <div>
            <h3> Accéder au menu de l’écran</h3>
            <p>Il existe deux manières d’accéder au menu de la console : </p>
            <li>Pour accéder au menu de la console, maintenez le bouton lumière pendant 3 s.</li>
            <li>En restant appuyé sur START + SELECT pendant 3/4s</li>
            <p>Le menu intègre 6 catégories : </p>
            <ul>
            <li>BRT : Niveau de luminosité entre 01 et 08 </li>
            <li>DSP : 5 effets de pixel look (Le 1 simule les pixels de l’écran d’origine.)</li>
            <li>FRM : Simule un flou de mouvement (Off par default)</li>
            <li>LGC : Permet de changer la couleur du logo GBC</li>
            <li>RGB : Permet de choisir une couleur précise via le code couleur</li>
            <li>N : Recentre l’écran si celui ci n’est plus centré</li>
            <p>Pour passer d’une catégorie à une autre, maintenir le tactile pendant 1 s</p>
            </ul>
          </div>
          <div>
            <h3> Batterie rechargeable USB</h3>
            <p>La batterie a une capacité de 1800mAh.Il est important d’utiliser uniquement le câble de charge fourni avec la console. Pour le dock de charge, ne dépassez pas 5 W.</p>
            <p>Ne pas utiliser de charge rapide. Cela va bloquer la console et la mettre en sécurité. (Un SAV sera nécessaire pour la débloquer.)</p>
            <p> En termes d’autonomie, la batterie propose une durée de jeu entre 8 h et 10 h. Il est également possible de jouer branché.</p>
          </div>
          <div>
            <h3>LED</h3>
            <ul>
              <li>L’allumage des LED se fait en maintenant A+B pendant 3/4s</li>
              <li>Pour régler la luminosité des LED, maintenir SELECT + A ou B.</li>
            </ul>
            <p>Il existe 4 modes de couleurs :</p>
            <ul>
              <li>STATIC : LED fixe sur la couleur que vous avez choisis.</li>
              <li>BREATH : Les LED vont baisser et monter en intensité.</li>
              <li>RAINBOW : Les LED changeront de couleur de gauche à droite.</li>
              <li>OFF : Les LED sont éteintes.</li>
            </ul>
            <p>Pour choisir la couleur en STATIC, il faudra les configurer  une à une</p>
            <ul>
              <li>START + A + B pour sélectionner les LED</li>
              <li>START + A ou B pour changer la couleur</li>
              <li>SELECT A ou B pour passer d’une LED à une autre.</li>
              <li>Maintenir START + A + B pour valider les couleurs</li>
              <h3>Tactile LED </h3>
              <p>La LED additionnelle est uniquement disponible sur les éditions limitées.</p>
              <p>Pour l’allumer, il suffit de toucher la zone tactile en haut à gauche sur le cache noir de la console. Un deuxième appui, éteindra la LED.</p>
              <p>Il est également possible de faire varier l’intensité. Pour ça, il suffit de maintenir une fois la zone tactile pour monter ou baisser l’intensité.</p>
              <p>Le placement des LED avec variateur dépendra de l’édition. Le système d’allumage sera lui à la même position.</p>
      
            </ul>
          </div>
          </section>
        <Footer/>
      </div>
    );
  };

  export default ImageAll;
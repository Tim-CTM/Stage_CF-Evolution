import React, { useState } from 'react';
import '../CSS/advence.css';
import Header from './Header';
import Footer from './Footer';
import images from '../image/imageadvence.jsx';


const imagesData = {
  bp: [
    { src: images.GA_SBP0, frontSrc: images.GA_FBP0, backSrc: images.GA_BBP0, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
    { src: images.GA_SBPBlackG, frontSrc: images.GA_FBPBlackG, backSrc: images.GA_BBPBlackG, className: "bp-base bp-BlackGlass", price: 40, color: "Noir transparent" },
    { src: images.GA_SBPBleuG, frontSrc: images.GA_FBPBleuG, backSrc: images.GA_BBPBleuG, className: "bp-base bp-BleuG", price: 10, color: "Bleu transparent" },
    { src: images.GA_SBPBleu, frontSrc: images.GA_FBPBleu, backSrc: images.GA_BBPBleu, className: "bp-base bp-Bleu", price: null, color: "Bleu" },
    { src: images.GA_SBPGreenG, frontSrc: images.GA_FBPGreenG, backSrc: images.GA_BBPGreenG, className: "bp-base bp-GreenG", price: null, color: "Vert transparent" },
    { src: images.GA_SBPLemon, frontSrc: images.GA_FBPLemon, backSrc: images.GA_BBPLemon, className: "bp-base bp-Lemon", price: null, color: "Citron" },
    { src: images.GA_SBPOrange, frontSrc: images.GA_FBPOrange, backSrc: images.GA_BBPOrange, className: "bp-base bp-Orange", price: null, color: "Orange" },
    { src: images.GA_SBPPurple, frontSrc: images.GA_FBPPurple, backSrc: images.GA_BBPPurple, className: "bp-base bp-Purple", price: null, color: "Violet" },
    { src: images.GA_SBPRed, frontSrc: images.GA_FBPRed, backSrc: images.GA_BBPRed, className: "bp-base bp-Red", price: null, color: "Rouge" },
    { src: images.GA_SBPRoseG, frontSrc: images.GA_FBPRoseG, backSrc: images.GA_BBPRoseG, className: "bp-base bp-RoseG", price: null, color: "Rose transparent" },
    { src: images.GA_SBPRose, frontSrc: images.GA_FBPRose, backSrc: images.GA_BBPRose, className: "bp-base bp-Rose", price: null, color: "Rose" },
    { src: images.GA_SBPSnes, frontSrc: images.GA_FBPSnes, backSrc: images.GA_BBPSnes, className: "bp-base bp-Snes", price: null, color: "Snes" },
    { src: images.GA_SBPWhite, frontSrc: images.GA_FBPWhite, backSrc: images.GA_BBPWhite, className: "bp-base bp-White", price: null, color: "Blanc" },
    { src: images.GA_SBPYellow, frontSrc: images.GA_FBPYellow, backSrc: images.GA_BBPYellow, className: "bp-base bp-Yellow", price: null, color: "Jaune" },
    { src: images.GA_SBPG, frontSrc: images.GA_FBPG, backSrc: images.GA_BBPG, className: "bp-base bp-G", price: null, color: "G" },
  ],
  coque: [
    { src: images.GA_SCoque0, frontSrc: images.GA_FCoque0, backSrc: images.GA_BCoque0, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
    { src: images.GA_SCoqueBlackG, frontSrc: images.GA_FCoqueBlackG, backSrc: images.GA_BCoqueBlackG, className: "bp-base bp-BlackGlass", price: 40, color: "Noir transparent" },
    { src: images.GA_SCoqueBleuG, frontSrc: images.GA_FCoqueBleuG, backSrc: images.GA_BCoqueBleuG, className: "bp-base bp-BleuG", price: 10, color: "Bleu transparent" },
    { src: images.GA_SCoqueCyanG, frontSrc: images.GA_FCoqueCyanG, backSrc: images.GA_BCoqueCyanG, className: "bp-base bp-CyanG", price: null, color: "Cyan transparent" },
    { src: images.GA_SCoqueCyan, frontSrc: images.GA_FCoqueCyan, backSrc: images.GA_BCoqueCyan, className: "bp-base bp-Cyan", price: null, color: "Cyan" },
    { src: images.GA_SCoqueGreenG, frontSrc: images.GA_FCoqueGreenG, backSrc: images.GA_BCoqueGreenG, className: "bp-base bp-GreenG", price: null, color: "Vert transparent" },
    { src: images.GA_SCoqueOrangeG, frontSrc: images.GA_FCoqueOrangeG, backSrc: images.GA_BCoqueOrangeG, className: "bp-base bp-OrangeG", price: null, color: "Orange transparent" },
    { src: images.GA_SCoquePurpleG, frontSrc: images.GA_FCoquePurpleG, backSrc: images.GA_BCoquePurpleG, className: "bp-base bp-PurpleG", price: null, color: "Violet transparent" },
    { src: images.GA_SCoqueRedG, frontSrc: images.GA_FCoqueRedG, backSrc: images.GA_BCoqueRedG, className: "bp-base bp-RedG", price: null, color: "Rouge transparent" },
    { src: images.GA_SCoqueRose, frontSrc: images.GA_FCoqueRose, backSrc: images.GA_BCoqueRose, className: "bp-base bp-Rose", price: null, color: "Rose" },
    { src: images.GA_SCoqueWhite, frontSrc: images.GA_FCoqueWhite, backSrc: images.GA_BCoqueWhite, className: "bp-base bp-White", price: null, color: "Blanc" },
    { src: images.GA_SCoqueYellow, frontSrc: images.GA_FCoqueYellow, backSrc: images.GA_BCoqueYellow, className: "bp-base bp-Yellow", price: null, color: "Jaune" },
    { src: images.GA_SCoqueG, frontSrc: images.GA_FCoqueG, backSrc: images.GA_BCoqueG, className: "bp-base bp-G", price: null, color: "G" },
  ],
  baseconsole: [
    { src: null, frontSrc: null, className: "bp-base bp-Blanc", price: null, color: "Blanc" },
    { src: null, frontSrc: null, className: "bp-base bp-Noir", price: 40, color: "Noir" },
  ],
  sidecoque: [
    { src: images.GA_SBCoque0, frontSrc: null, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
    { src: images.GA_SBCoqueBlackG, frontSrc: null, className: "bp-base bp-BlackGlass", price: 10, color: "Noir transparent" },
    { src: images.GA_SBCoqueBleuG, frontSrc: null, className: "bp-base bp-BleuG", price: null, color: "Bleu transparent" },
    { src: images.GA_SBCoqueCyanG, frontSrc: null, className: "bp-base bp-CyanG", price: null, color: "Cyan transparent" },
    { src: images.GA_SBCoqueCyan, frontSrc: null, className: "bp-base bp-Cyan", price: null, color: "Cyan" },
    { src: images.GA_SBCoqueGreenG, frontSrc: null, className: "bp-base bp-GreenG", price: null, color: "Vert transparent" },
    { src: images.GA_SBCoqueOrangeG, frontSrc: null, className: "bp-base bp-OrangeG", price: null, color: "Orange transparent" },
    { src: images.GA_SBCoquePurpleG, frontSrc: null, className: "bp-base bp-Violet", price: null, color: "Violet " },
    { src: images.GA_SBCoqueRedG, frontSrc: null, className: "bp-base bp-PurpleG", price: null, color: "Rouge transparent" },
    { src: images.GA_SBCoqueRose, frontSrc: null, className: "bp-base bp-Rose", price: null, color: "Rose" },
    { src: images.GA_SBCoqueWhite, frontSrc: null, className: "bp-base bp-White", price: null, color: "Blanc" },
    { src: images.GA_SBCoqueYellow, frontSrc: null, className: "bp-base bp-Jaune", price: null, color: "Jaune" },
    { src: images.GA_SBCoqueG, frontSrc: null, className: "bp-base bp-G", price: null, color: "G" },
  ],
  screen: [
    { src: images.GA_SScreen0, frontSrc: images.GA_FScreen0, className: "bp-base", price: null, color: "" },
    { src: images.GA_SScreenBlackS, frontSrc: images.GA_FScreenBlackS, className: "bp-base", price: null, color: "" },
    { src: images.GA_SScreenBlack, frontSrc: images.GA_FScreenBlack, className: "bp-base", price: null, color: "" },
    { src: images.GA_SScreenGrisS, frontSrc: images.GA_FScreenGrisS, className: "bp-base", price: null, color: "" },
    { src: images.GA_SScreenGris, frontSrc: images.GA_FScreenGris, className: "bp-base", price: null, color: "" },
    { src: images.GA_SScreenWhite, frontSrc: images.GA_FScreenWhite, className: "bp-base", price: null, color: "" },
  ],
  pads: [
    { src: images.GA_SP0, frontSrc: images.GA_FP0, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
    { src: images.GA_SPBleuS, frontSrc: images.GA_FPBleuS, className: "bp-base bp-BleuS", price: 30, color: "Bleu sombre" },
    { src: images.GA_SPBleu, frontSrc: images.GA_FPBleu, className: "bp-base bp-Bleu", price: null, color: "Bleu" },
    { src: images.GA_SPGreen, frontSrc: images.GA_FPGreen, className: "bp-base bp-Green", price: null, color: "Vert" },
    { src: images.GA_SPOrange, frontSrc: images.GA_FPOrange, className: "bp-base bp-Orange", price: null, color: "Orange" },
    { src: images.GA_SPRed, frontSrc: images.GA_FPRed, className: "bp-base bp-Red", price: null, color: "Rouge" },
    { src: images.GA_SPRose, frontSrc: images.GA_FPRose, className: "bp-base bp-Rose", price: null, color: "Rose" },
    { src: images.GA_SPWhite, frontSrc: images.GA_FPWhite, className: "bp-base bp-White", price: null, color: "Blanc" },
    { src: images.GA_SPYellow, frontSrc: images.GA_FPYellow, className: "bp-base bp-Yellow", price: null, color: "Jaune" },
  ],
  sticker: [
    { src: images.GA_StickerB, frontSrc: null, className: "bp-base", price: null, color: "" },
    { src: images.GA_StickerW, frontSrc: null, className: "bp-base", price: null, color: "" },
  ],
  laniere: [
    { src: images.GA_SStrap0, frontSrc: images.GA_FStrap0, backSrc: images.GA_BStrap0, className: "bp-base bp-GrisDMG", price: null, color: "DMG" },
    { src: images.GA_SStrapBleuC, frontSrc: images.GA_FStrapBleuC, backSrc: images.GA_BStrapBleuC, className: "bp-base bp-BleuC", price: 40, color: "Bleu clair" },
    { src: images.GA_SStrapBleu, frontSrc: images.GA_FStrapBleu, backSrc: images.GA_BStrapBleu, className: "bp-base bp-Bleu", price: 10, color: "Bleu" },
    { src: images.GA_SStrapGreen, frontSrc: images.GA_FStrapGreen, backSrc: images.GA_BStrapGreen, className: "bp-base bp-GreenG", price: null, color: "Vert clair" },
    { src: images.GA_SStrapOrange, frontSrc: images.GA_FStrapOrange, backSrc: images.GA_BStrapOrange, className: "bp-base bp-Orange", price: null, color: "Orange" },
    { src: images.GA_SStrapPurple, frontSrc: images.GA_FStrapPurple, backSrc: images.GA_BStrapPurple, className: "bp-base bp-Purple", price: null, color: "Violet" },
    { src: images.GA_SStrapRed, frontSrc: images.GA_FStrapRed, backSrc: images.GA_BStrapRed, className: "bp-base bp-Red", price: null, color: "Rouge" },
    { src: images.GA_SStrapRoseG, frontSrc: images.GA_FStrapRoseG, backSrc: images.GA_BStrapRoseC, className: "bp-base bp-RoseG", price: null, color: "Rose clair" },
    { src: images.GA_SStrapRose, frontSrc: images.GA_FStrapRose, backSrc: images.GA_BStrapRose, className: "bp-base bp-Rose", price: null, color: "Rose" },
    { src: images.GA_SStrapWhite, frontSrc: images.GA_FStrapWhite, backSrc: images.GA_BStrapWhite, className: "bp-base bp-White", price: null, color: "Blanc" },
    { src: images.GA_SStrapYellow, frontSrc: images.GA_FStrapYellow, backSrc: images.GA_BStrapYellow, className: "bp-base bp-Yellow", price: null, color: "Jaune" },
  ],
};

   
 const ImageAll = () => {
    const [selectImages, setSelectImages] = useState({
      bp: imagesData.bp[0],
      coque: imagesData.coque[0],
      baseconsole: imagesData.baseconsole[0],
      sidecoque: imagesData.sidecoque[0],
      pads: imagesData.pads[0],
      screen: imagesData.screen[0],
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
    const { bp, coque, baseconsole, pads, sidecoque, laniere } = selectImages;
    return basePrice + (bp.price ?? 0) + (coque.price ?? 0) + (baseconsole.price ?? 0) + (pads.price ??0) + (sidecoque ?? 0) + (laniere ?? 0) ;
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
              <h3 onClick={() => toggleSection('sidecoque')} className={openSection === 'sidecoque' ? 'active' : ''}>Coque arrière</h3>
              <p>Uniquement pour les couleurs duo</p>
              {openSection === 'sidecoque' && (
                <div className="accordion-content">
                  <ImageL type="sidecoque" images={imagesData.sidecoque} updateImages={updateImages} />
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
            <div className={`view ${view === 'FRONT' ? 'FRONT' : view === 'SIDE' ? 'SIDE' : 'BACK'}`}>
                <div style={{ position: "relative", width: "300px", height: "300px" }}>
                  {view === 'FRONT' && (
                    <>
                      <img src={selectImages.coque.frontSrc} alt="Coque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                      <img src={selectImages.bp.frontSrc} alt="Button" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                      <img src={selectImages.pads.frontSrc} alt="Pads" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                      <img src={images.GA_FStrapShadow} alt="Shadow" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
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
                        <img src={images.GA_FStrapShadow } alt="Shadow" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 5 }} />
                        <img src={selectImages.screen.src} alt="Screen" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 6 }} />
                        <img src={selectImages.sidecoque.src} alt="sidecoque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 7 }} />
                        <img src={images.GA_SLED} alt="Led" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 8 }} />
                        <img src={selectImages.laniere.src} alt="Laniere" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }} />
                      </>
                  )}

                  {view === 'BACK' && (
                    <>  
                    <img src={selectImages.coque.backSrc} alt="backcoque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                    <img src={selectImages.bp.backSrc} alt="Backboutton" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                    <img src={images.GA_SShadow } alt="shadow" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                    <img src={selectImages.sticker.src} alt="Sticker" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} />
                    <img src={selectImages.laniere.backSrc} alt="Laniere" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} />
                    </>
                  )}
                  </div>
                </div>
              </div>
              <div className="views-container">
                <button onClick={() => setView('FRONT')}></button>
                <button onClick={() => setView('SIDE')}></button>
                <button onClick={() => setView('BACK')}></button>
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
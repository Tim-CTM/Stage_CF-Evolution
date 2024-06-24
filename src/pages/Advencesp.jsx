import React, { useState } from 'react';
import '../CSS/advence.css';
import Header from './Header';
import Footer from './Footer';
import images from '../image/imageadvencesp.jsx';


const imagesData = {
    bp: [
      { src: images.GA_SP_SBP0, frontSrc: images.GColor_FBP0, className: "bp-base bp-GrisDMG", price: null, color: "Gris" },
      { src: images.GA_SP_SBPBleu, frontSrc: images.GA_SP_FBPBleu , className: "bp-base bp-BlackGlass", price: 40, color: "Bleu" },
      { src: images.GA_SP_SBPGreen, frontSrc: images.GA_SP_FBPGreen, className: "bp-base bp-Black", price: 10, color: "Vert" },
      { src: images.GA_SP_SBPLemon, frontSrc: images.GA_SP_FBPLemon, className: "bp-base bp-BleuG", price: null, color: "Citron" },
      { src: images.GA_SP_SBPOrange, frontSrc: images.GA_SP_FBPOrange, className: "bp-base bp-Bleu", price: null, color: "Orange" },
      { src: images.GA_SP_SBPRed, frontSrc: images.GA_SP_FBPRed, className: "bp-base bp-VertG", price: null, color: "Rouge" },
      { src: images.GA_SP_SBPRose, frontSrc: images.GA_SP_FBPRose, className: "bp-base bp-Gris", price: null, color: "Rose" },
      { src: images.GA_SP_SBPWhite, frontSrc: images.GA_SP_FBPWhite, className: "bp-base ", price: null, color: "Blanc" },
      { src: images.GA_SP_SBPYellow, frontSrc: images.GA_SP_FBPYellow, className: "bp-base ", price: null, color: "Jaune" },
    ],
    coque: [
      { src: images.GA_SP_SCoque0, frontSrc: images.GA_SP_FBP0, className: "bp-base bp-GrisDMG", price: null, color: "Gris" },
      { src: images.GA_SP_SCoqueBlackG , frontSrc: images.GA_SP_FCoqueBlackG, className: "bp-base bp-Jaune  ", price: null, color: "Noir transparent" },
      { src: images.GA_SP_SCoqueBlack , frontSrc: images.GColor_FCoqueBlack, className: "bp-base bp-Black" , price: 15, color: "Noir" },
      { src: images.GA_SP_SCoqueBleuG , frontSrc: images.GA_SP_FCoqueBleuG, className: "bp-base bp-Bleu ", price: null, color: "Bleu transparent" },
      { src: images.GA_SP_SCoqueCyan , frontSrc: images. GA_SP_FCoqueCyan, className: "bp-base bp-Cyan", price: null, color: "Cyan" },
      { src: images.GA_SP_SCoqueGreenG , frontSrc: images.GA_SP_FCoqueGreenG, className: "bp-base bp-VertGlass ", price: null, color: "Vert transparent" },
      { src: images.GA_SP_SCoquePurpleA , frontSrc: images.GA_SP_FCoquePurpleA, className: "bp-base bp-Citron", price: null, color: "Violet atomique" },
      { src: images.GA_SP_SCoquePurpleG , frontSrc: images.GA_SP_FCoquePurpleG, className: "bp-base bp-Citron", price: null, color: "Violet transparant" },
      { src: images.GA_SP_SCoquePurple , frontSrc: images.GA_SP_FCoquePurple, className: "bp-base bp-Citron", price: null, color: "Violet" },
      { src: images.GA_SP_SCoqueRedG , frontSrc: images.GA_SP_FCoqueRedG, className: "bp-base bp-Violet  ", price: null, color: "Rouge transparent" },
      { src: images.GA_SP_SCoqueRose , frontSrc: images.GA_SP_FCoqueRose, className: "bp-base bp-Rose ", price: null, color: "Rose" },
      { src: images.GA_SP_SCoqueYellow , frontSrc: images.GA_SP_FCoqueYellow, className: "bp-base bp-Jaune  ", price: null, color: "Jaune" },
      { src: images.GA_SP_SCoqueG , frontSrc: images.GA_SP_FCoqueG, className: "bp-base bp-Verre  ", price: null, color: "Transparent" },
    ],
    baseconsole: [
      { src: null, frontSrc: null, className: "bp-base bp-Blanc ", price: null, color: "Oui" },
      { src: null, frontSrc: null, className: "bp-base bp-Black ", price: 40, color: "Non" },
    ],
    backcoque: [
      { src: images.GA_SP_SBCoque0, frontSrc: images.GA_SP_FBCoque0, className: "bp-base bp-GrisDMG", price: null, color: "Gris" },
      { src: images.GA_SP_SBCoqueBlackG, frontSrc: images.GA_SP_FBCoqueBlackG, className: "bp-base bp-BlackGlass", price: 10, color: "Noir transparent" },
      { src: images.GA_SP_SBCoqueBleuG, frontSrc: images.GA_SP_FBCoqueBleuG, className: "bp-base bp-Bleu", price: null, color: "Bleu transparent" },
      { src: images.GA_SP_SBCoqueCyan, frontSrc: images.GA_SP_FBCoqueCyan, className: "bp-base bp-Turquoise", price: null, color: "Turquoise" },
      { src: images.GA_SP_SBCoqueGreenG, frontSrc: images.GA_SP_FBCoqueGreenG, className: "bp-base bp-VertGlass", price: null, color: "Vert transparent" },
      { src: images.GA_SP_SBCoquePurpleA, frontSrc: images.GA_SP_FBCoquePurpleG, className: "bp-base bp-Citron", price: null, color: "Violet atomique" },
      { src: images.GA_SP_SBCoquePurpleG, frontSrc: images.GA_SP_FBCoquePurpleA, className: "bp-base bp-Citron", price: null, color: "Violet transparent" },
      { src: images.GA_SP_SBCoquePurple, frontSrc: images.GA_SP_FBCoquePurple, className: "bp-base bp-Citron", price: null, color: "Violet" },
      { src: images.GA_SP_SBCoqueRedG, frontSrc: images.GA_SP_FBCoqueRedG, className: "bp-base bp-Violet", price: null, color: "Rouge transparent" },
      { src: images.GA_SP_SBCoqueRose, frontSrc: images.GA_SP_FBCoqueRose, className: "bp-base bp-Rose", price: null, color: "Rose" },
      { src: images.GA_SP_SBCoqueYellow, frontSrc: images.GA_SP_FBCoqueYellow, className: "bp-base bp-Jaune", price: null, color: "Jaune" },
      { src: images.GA_SP_SBCoqueG, frontSrc: images.GA_SP_FBCoqueG, className: "bp-base bp-Verre", price: null, color: "Transparent" },
    ],
    screen: [   
      { src: images.GA_SP_SScreenB, frontSrc: images.GA_SP_FScreenB, className: "bp-base ", price: null, color: "" },
      { src: images.GA_SP_SScreenW, frontSrc: images.GA_SP_FScreenW, className: "bp-base ", price: null, color: "" },
    ],
    pads: [
      { src: images.GA_SP_SP0, frontSrc: images.GA_SP_FP0, className: "bp-base bp-GrisDMG ", price: null, color: "DMG" },
      { src: images.GA_SP_SPBleu  , frontSrc: images.GA_SP_FPBleu, className: "bp-base bp-Bleu ", price: null, color: "Bleu" },
      { src: images.GA_SP_SPOrange , frontSrc: images.GA_SP_FPOrange, className: "bp-base bp-Bleu-Glass ", price: null, color: "Bleu Transparant" },
      { src: images.GA_SP_SPWhite, frontSrc:images.GA_SP_FPWhite , className: "bp-base bp-Glass", price: null, color: "Transparent" },
      { src: images.GA_SP_SPGreen , frontSrc:images.GA_SP_FPGreen, className: "bp-base bp-Vert", price: null, color: "Vert" },
      { src: images.GA_SP_SPPurple , frontSrc: images.GA_SP_FPPurple, className: "bp-base bp-Violet", price: null, color: "Violet" },
      { src: images.GA_SP_SPRed, frontSrc: images.GA_SP_FPRed, className: "bp-base bp-Rouge ", price: null, color: "Rouge" },
      { src: images.GA_SP_SPYellow , frontSrc: images.GA_SP_FPYellow, className: "bp-base bp-Jaune ", price: null, color: "Jaune" },
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
    const { bp, coque, baseconsole, pads, backcoque } = selectImages;
    return basePrice + (bp.price ?? 0) + (coque.price ?? 0) + (baseconsole.price ?? 0) + (pads.price ??0) + (backcoque.price ??0) ;
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
        </div>
          <hr width="250px" align="left" />
          <h3>INSTALLATION BATTERIE</h3>
          <p>Pose d'une batterie rechargeable - 2300 mAh</p>
          <hr width="250px" align="left" />
          <h3>USB-C MOD</h3>
          <hr width="250px" align="left" />
          <h3>ACCESSOIRES</h3>
          <hr width="250px" align="left" />
          <h5>Prix total des articles : {calculateAllPrice()} €</h5>
          <button className="panier">Ajouter au panier</button>
        </div>

          <div className='affichage-view'>
            <div className={`view ${view === 'SIDE' ? 'SIDE' : 'FRONT'}`}>
              <div style={{ position: "relative", width: "300px", height: "300px" }}>
                <img src={view === 'SIDE' ? selectImages.coque.src : selectImages.coque.frontSrc} alt="Coque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                <img src={view === 'SIDE' ? selectImages.bp.src : selectImages.bp.frontSrc} alt="Button" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                <img src={view === 'SIDE' ? selectImages.pads.src : selectImages.pads.frontSrc} alt="pads" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                <img src={view === 'SIDE' ? selectImages.backcoque.src : selectImages.backcoque.frontSrc} alt="Backcoque" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                <img src={view === 'SIDE' ? selectImages.screen.src : selectImages.screen.frontSrc} alt="Screen" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                <img src={view === 'SIDE' ? images.GA_SP_SShadow: images.GA_SP_FShadow} alt="Shadow" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
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

        <Footer/>
      </div>
    );
  };

  export default ImageAll;
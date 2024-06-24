import React, { useEffect, useState } from "react";
// import useRef from 'react';
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "../CSS/accueil2.css";
import backgroundImage from '../image/Accueil/backgroundaccueil.jpg';

const GameboyColor = () => {
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate();
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [colorClass, setColorClass] = useState("teal");

  useEffect(() => {
    const colors = ["red", "purple", "green", "yellow", "teal", "transparent"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColorClass(randomColor);

    const timer = setTimeout(() => {
      setShowText(true);
    }, 8000); // 12 seconds
    return () => clearTimeout(timer);
  }, []);



  useEffect(() => {
    // Ajouter le gestionnaire de clic pour les boutons
    $(".clicktogo").on("click", function () {
      setShowBlackScreen(true);
      setTimeout(() => {
        setShowWelcome(true);
        setTimeout(() => {
          navigate("/accueil"); // Utiliser navigate pour rediriger vers la nouvelle page après 10 secondes
        }, 7000); // Délai de 10 secondes
      }, 200); // Correspond à la durée de l'animation de l'écran noir
    });

    // Nettoyer les gestionnaires d'événements
    return () => {
      $(".clicktogo").off("click");
    };
  }, [navigate]);

  const animar = () => {
    const lf = document.querySelector("#f");
    const lr = document.querySelector("#r");
    const lo = document.querySelector("#o");
    const ln = document.querySelector("#n");
    const lt = document.querySelector("#t");
    const lh = document.querySelector("#h");
    const le = document.querySelector("#e");
    const lnn = document.querySelector("#nn");
    const ld = document.querySelector("#d");
    const lx = document.querySelector("#x");
    const lw = document.querySelector("#w");
    const lp = document.querySelector("#p");
    const lu = document.querySelector("#u");

    if (lf) lf.className = "f";
    if (lr) lr.className = "r";
    if (lo) lo.className = "o";
    if (ln) ln.className = "n";
    if (lt) lt.className = "t";
    if (lh) lh.className = "h";
    if (le) le.className = "e";
    if (lnn) lnn.className = "nn";
    if (ld) ld.className = "d";
    if (lx) lx.className = "x";
    if (lw) lw.className = "w";
    if (lp) lp.className = "p";
    if (lu) lu.className = "u";
  };

  useEffect(() => {
    if (showWelcome) {
      animar();
    }
  }, [showWelcome]);


  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, 
        WebkitBackgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'rgb(0, 0, 0)',}}>
      
      <main>
      <div id="gameboy" className={`clicktogo ${colorClass}`}> {/*Autres couleurs : red,purple,green,yellow,teal,transparent */}
    <div id="canvas"></div>
    <div id="border"></div>
    <div id="border-top"></div>
    <div id="border-left"></div>
    <div id="border-bottom"></div>
    <div id="border-right"></div>
    <div id="screw-small-right" class="screw small"></div>
    <div id="screw-small-left" class="screw small"></div>
    <div id="screw-large-right" class="screw large"></div>
    <div id="screw-large-left" class="screw large"></div>
    <div id="backboard"></div>
    <div id="motherboard"></div>
    <div id="motherboard-capacitors" class="capacitors"></div>
    <div id="chip-short" class="chip"></div>
    <div id="chip-diagonal" class="chip"></div>
    <div id="chip-tall" class="chip"></div>
    <div id="chip-capacitors" class="capacitors"></div>
    <div id="contrast-knob"></div>
    <div id="link-port"></div>
    <div id="circuit-bottom" class="circuit"></div>
    <div id="circuit-top" class="circuit"></div>
    <div id="transistors"></div>
    <div id="processor"></div>
    <div id="component"></div>
    <div id="controller"></div>
    <div id="speaker"></div>
    <div id="whitescreen"></div>
    <div id="glass"></div>
    <div id="glass-gameboy-text">GAME BOY</div>
    <div id="glass-color-text">C</div>
    <div id="screen"></div>
    <div id="screen-gameboy-text">GAME BOY</div>
    <div id="screen-nintendo-text">Nintendo®</div>
    {showText && <div id="click-here-text" className="blink">PRESS START</div>}
    <div id="joystick-pad"></div>
    <div id="joystick">.</div>
    <div id="control"></div>
    <div id="control-b" class="control-button">B</div>
    <div id="control-a" class="control-button">A</div>
    <div id="start-select-box"></div>
    <div id="start-select-button"></div>
    <div id="cover-vertical"></div>
    <div id="cover-horizontal"></div>
    <div id="gloss"></div>
    <div id="speaker-holes"></div>
    <div id="power"></div>
  </div>
      </main>
      {showBlackScreen && <div className="black-screen show"></div>}

      {showWelcome && (
        <div className="conteiner">
          <ul>
            <li id="f">E</li>
            <li id="r">M</li>
            <li id="o">A</li>
            <li id="n">L</li>
            <li id="t">T</li>
            <li id="h">O</li>
            <br></br>
            <li id="e">C</li>
            <li id="nn">U</li>
            <li id="d">S</li>
            <li id="x">T</li>
            <li id="w">O</li>
            <li id="p">M</li>
            <li id="u">S</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameboyColor;

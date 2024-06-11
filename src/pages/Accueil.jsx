import React from 'react';
import '../index.css';
import Gameboydmg from '../image/gameboydmg.png';
import Gameboyadvence from '../image/gameboyadvence.png';
import Gameboyadvencesp from '../image/gameboyadvencesp.webp';
import Gameboycolor from '../image/gameboycolor.png';
import Slider from './Slider.jsx';

const Accueil = () => {
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.13.0/umd/react.production.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.0/umd/react-dom.production.min.js"></script>
      <Slider/>
      <div class="container-sidespace">
        <div>
          <h1>Page accueil</h1>
          <hr width="100px" align="left" />
          <div>
            <h2>Gameboy</h2>
            <img class="gameboydmg" src={Gameboydmg}/>
          </div>
          <div>
            <h2>Gameboy Advence</h2>
            <img class="gameboyadvence" src={Gameboyadvence}/>
          </div>
          <div>
            <h2>Gameboy Advence SP</h2>
            <img class="gameboyadvencesp" src={Gameboyadvencesp}/>
          </div>
          <div>
            <h2>Gameboy Color</h2>
            <img class="gameboycolor" src={Gameboycolor}/>
          </div>
        </div>
      </div> 
    </div> 
  );
};

export default Accueil;
import React from 'react';
import { Link } from 'react-router-dom';

const Cookies = () => {
  return (
      <div class="container-sidespace">
        <div>
            <h1>Politique des Cookies </h1>
            <h2>1. Introduction</h2>
            <p>Chez E-GAMEBOY, accessible depuis [URL du site], nous utilisons des cookies pour améliorer votre expérience en navigant sur notre site web. En utilisant le site, vous acceptez l’utilisation de cookies conformément à cette Politique des Cookies.</p>
            <h2>2. Que sont les cookies ?</h2>
            <p>Les cookies sont de petits fichiers texte qui sont utilisés pour stocker de petites informations. Ils sont stockés sur votre appareil lorsque le site web est chargé sur votre navigateur. Ces cookies nous aident à faire fonctionner le site web correctement, à le rendre plus sûr, à fournir une meilleure expérience utilisateur, et à comprendre comment le site web fonctionne et à analyser ce qui fonctionne et où il doit être amélioré.</p>
            <h2>3. Comment utilisons-nous les cookies ?</h2>
            <p>Comme la plupart des services en ligne, notre site web utilise des cookies de première partie et des cookies de tiers à plusieurs fins. Les cookies de première partie sont principalement nécessaires pour que le site web fonctionne de la bonne manière, et ils ne collectent pas de données personnelles identifiables.
              Les cookies tiers utilisés sur nos sites web servent principalement à comprendre comment le site web performe, comment vous interagissez avec notre site web, à maintenir nos services sécurisés, à fournir des publicités qui sont pertinentes pour vous, et, tout cela en vous fournissant une meilleure et améliorée expérience utilisateur et en aidant à accélérer vos futures interactions avec notre site.</p>
            <h2>4. Quels types de cookies utilisons-nous </h2>
            <li>Cookies essentiels : Certains cookies sont essentiels pour vous permettre de profiter de toutes les fonctionnalités de notre site. Ils nous permettent de maintenir les sessions des utilisateurs et de prévenir toute menace de sécurité. Ils ne collectent ni ne stockent aucune information personnelle.</li>
            <li>Cookies statistiques : Ces cookies stockent des informations comme le nombre de visiteurs du site, le nombre de visiteurs uniques, les pages du site qui ont été visitées, la source de la visite, etc. Ces données nous aident à comprendre et analyser la performance du site et où il nécessite des améliorations.</li>
            <li>Cookies fonctionnels : Ce sont les cookies qui assistent certaines fonctionnalités non essentielles sur notre site. Ces fonctionnalités incluent l’intégration de contenu comme des vidéos ou le partage de contenu du site sur des plateformes de médias sociaux.</li>
            <li>Cookies de préférences : Ces cookies nous aident à stocker vos paramètres et vos préférences de navigation comme les préférences de langue pour que vous ayez une meilleure et plus efficace expérience lors de vos futures visites sur le site.</li>
            <h2>5. Comment puis-je contrôler les préférences des cookies ?</h2>
            <p>Si vous décidez de changer vos préférences plus tard au cours de votre session de navigation, vous pouvez cliquer sur l’onglet « Politique de Cookies » sur votre écran. Cela affichera à nouveau l’avis de consentement vous permettant de changer vos préférences ou de retirer complètement votre consentement.
              De plus, différents navigateurs fournissent différentes méthodes pour bloquer et supprimer les cookies utilisés par les sites web. Vous pouvez changer les paramètres de votre navigateur pour bloquer/supprimer les cookies. Pour en savoir plus sur comment gérer et supprimer les cookies, visitez <Link to="https://allaboutcookies.org/">www.allaboutcookies.org</Link></p>
        </div>
      </div>
  );
};

export default Cookies;
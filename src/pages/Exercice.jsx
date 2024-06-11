import React from 'react';

function Banner() {
    return(
    <div style={{padding:"20px", border: "1px solid red" , height: "90px"}}>
    <h1>La maison jungle</h1>
    </div>
)
}
function Cart(){
    const prixMonstera = 8;
    const prixLierre = 10;
    const prixBouquetFleurs = 15;
    return ( 
    <div style ={{ padding:"20px" ,border: "1px solid green", height: "300px", width: "250px" }}> 
    <h4>Panier</h4>
    <ul>
        <li>Monstera - {prixMonstera} </li>
        <br/>
        <li>Lierre - {prixLierre} </li>
        <br/>
        <li>Bouquet de fleurs- {prixBouquetFleurs} </li>
    </ul>
        <div><p>Total : {prixMonstera + prixLierre + prixBouquetFleurs}</p>
        </div>
    </div>
)
}



const Exercice = () => {
  return (
    <body>
        <Banner/>
        <Cart/>
    </body>
  );
};



export default Exercice;


import React from "react";
import "../hojas-de-estilo/Contador.css";

function Contador({ numClics, sorpresa }){
  return(
    <>
    <div className={sorpresa?"contador sorpresa": "contador"} >
      {numClics}
    </div>
    <div className={sorpresa?"imagen": "sorpresa"}>
      <img src={require("../imagenes/Sorpresa.png")} />
    </div>
    </>
  );
};

export default Contador;
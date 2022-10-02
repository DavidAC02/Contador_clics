import './App.css';
import fccLogo from "./imagenes/fcc.png";
import Boton from "./componentes/Boton.jsx";
import Contador from './componentes/contador';
import { useState } from "react";

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic=()=>{
    setNumClics(numClics+1);
  };

  const reiniciarContador=()=>{
    setNumClics(0);
  };

  const veintitres = numClics==23 ? true : false;

  return (
    <div className={ veintitres ? "veintitres" : "App" }>
      <div className="contenedor-principal">
        <Contador numClics={numClics} sorpresa={veintitres} />
        <Boton 
        texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton 
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
};

export default App;

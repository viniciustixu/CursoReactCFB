import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Carro from './Components/Carro';


function App() {

  const [carro, setCarro] = useState(true);
  const mostrarOcultarCarro = () => {
    setCarro(!carro);
  };

  return (
    <>
      <h1>Componente de classe</h1>
      {carro ? <Carro fator={10} /> : ''}

      <button onClick={() => mostrarOcultarCarro()}>
        Ocultar
      </button>
    </>
  );
};

export default App;

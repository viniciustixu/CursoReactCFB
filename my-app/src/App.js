import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TabelaIMC from './Components/TabelaIMC';
import Fpeso from './Components/Fpeso';
import Faltura from './Components/Faltura';
import Fcalcular from './Components/Fcalcular';

function App() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [reultado, setResultado] = useState(0);

  return (
    <>
      <Fpeso peso={peso} setPeso={setPeso} />
      <Faltura altura={altura} setAltura={setAltura} />
      <Fcalcular peso={peso} altura={altura} setResultado={setResultado} />
      <TabelaIMC />
    </>
  );
};

export default App;

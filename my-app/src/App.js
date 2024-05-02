import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {

  const [cor, setCor] = useState(1);

  const vermelho = { color: '#f00' };
  const verde = { color: '#0f0' };
  const azul = { color: '#00f' };

  const retornaCor = (c) => {
    if (c == 1) {
      return vermelho;
    } else if (c == 2) {
      return verde;
    } else {
      return azul;
    }
  };

  const mudacor = () => {
    setCor(cor + 1);
    if (cor > 2) {
      setCor(1);
    }
  };

  // setInterval(mudacor, 1000);

  return (
    <>
      <h1 style={retornaCor(cor)}>Cores</h1>
      <button onClick={mudacor}>Muda cor</button>
    </>
  );
};

export default App;

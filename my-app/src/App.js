import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Caixa from './Components/Caixa';
import Canal from './Components/Canal';



function App() {

  return (
    <>
      <Caixa site="www.google.com">
        <p>Componente 1 filho do Caixa</p>
        <p>Componente 2 filho do Caixa</p>
        <p>Componente 3 filho do Caixa</p>
        <Canal />
      </Caixa>
    </>
  );
};

export default App;

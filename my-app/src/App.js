import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {

  const [nome, setNome] = useState('');
  const [carro, setCarro] = useState('Golf');



  return (
    <>
      <label htmlFor="fnome">Digite seu nome</label>
      <input type="text" name="fnome" id="fnome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <p>Nome digitado: {nome} </p>

      <label htmlFor="sCarro">Selecione um carro</label>
      <select value={carro} id="sCarro" onChange={(e) => setCarro(e.target.value)}>
        <option value="HRV">HRV</option>
        <option value="Golf">Golf</option>
        <option value="Cruze">Cruze</option>
        <option value="Argo">Argo</option>
      </select>
      <p>Carro selecionado: {carro}</p>
    </>
  );
};

export default App;

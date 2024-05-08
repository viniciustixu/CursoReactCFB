import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {

  const carros = ['HRV', 'Golf', 'Focus', 'Cruze', 'Argo'];
  const listaCarros = carros.map(
    (c, i) =>
      <li key={i}>{i} - {c}</li>
  );

  return (
    <>
      <ul> {listaCarros} </ul>
    </>
  );
};

export default App;

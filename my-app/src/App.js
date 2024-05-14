import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';



function App() {

  const [nome, setNome] = useState();

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor);
  };

  const consultar = (chave) => {
    alert(localStorage.getItem(chave));
  };

  const apagar = (chave) => {
    localStorage.removeItem(chave);
  };


  return (
    <>
      <label htmlFor="iNome">Digite um nome: </label>
      <input type="text" id="iNome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <button onClick={() => armazenar('ls_nome', nome)}>Gravar nome</button>
      <button onClick={() => consultar('ls_nome')}>Ver nome</button>
      <button onClick={() => apagar('ls_nome')}>Remover nome</button>
    </>
  );
};

export default App;

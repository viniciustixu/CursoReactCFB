import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



const carros = [
  { categoria: "Esporte", preco: "110000", modelo: "Golf GTI" },
  { categoria: "Esporte", preco: "135000", modelo: "Camaro" },
  { categoria: "SUV", preco: "70000", modelo: "HRV" },
  { categoria: "SUV", preco: "85000", modelo: "T-Cross" },
  { categoria: "Utilitário", preco: "90000", modelo: "Hillux" },
  { categoria: "Utilitário", preco: "65000", modelo: "Ranger" },
];

const linhas = (cat) => {
  const li = [];
  carros.forEach((carro, index) => {
    if (carro.categoria.toLocaleUpperCase().includes(cat.toLocaleUpperCase()) || cat === "") {
      li.push(
        <tr>
          <td>{carro.categoria}</td>
          <td>{carro.preco}</td>
          <td>{carro.modelo}</td>
        </tr>
      );
    }
  });

  return li;
};


const TabelaCarros = (cat) => {
  return (
    <table border='1' style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  );
};

const pesquisaCategoria = (cat, scat) => {
  return (
    <div>
      <label htmlFor="idPesquisa">Digite uma categoria</label>
      <input type="text" id="idPesquisa" value={cat} onChange={(e) => scat(e.target.value)} />
    </div>
  );

};



function App() {

  const [categoria, setCategoria] = useState('');

  return (
    <>
      {pesquisaCategoria(categoria, setCategoria)}
      {TabelaCarros(categoria)}
    </>
  );
};

export default App;

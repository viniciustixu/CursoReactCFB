import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  // ESTILOS
  const tabu = {
    display: 'flex',
    flexDirection: 'column'
  };

  const tabuLinha = {
    display: 'flex',
    flexDirection: 'row'
  };

  const casa = {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    fontSize: 60,
    border: '1px solid black'
  };



  // STATES
  const jogoInicial = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  const [jogo, setJogo] = useState(jogoInicial);
  const [simboloAtual, setSimboloAtual] = useState('X');
  const [jogando, setJogando] = useState(true);

  // FUNÇÕES
  const tabuleiro = (j) => {
    return (
      <div style={tabu}>
        <div style={tabuLinha}>
          <div style={casa} data-pos='00' onClick="">{j[0][0]}</div>
          <div style={casa} data-pos='01' onClick="">{j[0][1]}</div>
          <div style={casa} data-pos='02' onClick="">{j[0][2]}</div>
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos='10' onClick="">{j[1][0]}</div>
          <div style={casa} data-pos='11' onClick="">{j[1][1]}</div>
          <div style={casa} data-pos='12' onClick="">{j[1][2]}</div>
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos='20' onClick="">{j[2][0]}</div>
          <div style={casa} data-pos='21' onClick="">{j[2][1]}</div>
          <div style={casa} data-pos='22' onClick="">{j[2][2]}</div>
        </div>
      </div>
    );
  };


  return (
    <>

    </>
  );
};

export default App;

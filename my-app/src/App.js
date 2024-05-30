import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


// TO DO
// Impedir mais de um operador na calculadora
// impedir colocar mais um ponto em um numero que já tenha ponto


function App() {

  const [valorTela, setValorTela] = useState('');
  const [resultado, setResultado] = useState(0);
  const [acumulador, setAcumulador] = useState(0);
  const [operado, setOperado] = useState(false);


  //COMPONENTES
  const Tela = (valor, res) => {
    return (
      <div style={cssTela}>
        <span style={cssTelaOperado}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>
    );
  };

  const Btn = (label, onClick) => {
    return (
      <button style={cssBtn} onClick={onClick}>{label}</button>
    );
  };

  //FUNCOES
  const addDigitoTela = (d) => {
    // Verifica se o último caractere é um operador
    const operadores = ['+', '-', '*', '/'];
    const ultimoCaractere = valorTela.slice(-1);

    if (operadores.includes(d) && operadores.includes(ultimoCaractere)) {
      // Substitui o último operador com o novo operador
      setValorTela(valorTela.slice(0, -1) + d);
      return;
    }

    // Verifica se o ponto já foi inserido no número atual
    const partes = valorTela.split(/[\+\-\*\/]/);
    const ultimaParte = partes[partes.length - 1];

    if (d === '.' && ultimaParte.includes('.')) {
      return;
    }

    if ((d == '+' || d == '-' || d == '*' || d == '/') && operado) {
      console.log("+-*/");
      setOperado(false);
      setValorTela(resultado + d);
      return;
    }

    if (operado) {
      setValorTela(d);
      setOperado(false);
      return;
    }

    const valorDigitadoTela = valorTela + d;
    setValorTela(valorDigitadoTela);
  };


  const limparMemoria = () => {
    setOperado(false);
    setValorTela('');
    setResultado(0);
    setAcumulador(0);
    return;
  };

  const operacao = (oper) => {
    if (oper == 'bs') {
      let vtela = valorTela;
      vtela = vtela.substring(0, (vtela.length - 1));
      setValorTela(vtela);
      setOperado(false);
      return;
    }

    try {
      const r = eval(valorTela); //Cálculo
      setAcumulador(r);
      setResultado(r);
      setOperado(true);
    } catch {
      setResultado('error');
    }
  };




  //ESTILOS
  const cssContainer = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: 300,
    border: '1px solid black'
  };

  const cssBotoes = {
    flexDirection: 'row',
    flexWrap: 'wrap',
  };

  const cssTela = {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#444',
    flexDirection: 'column',
    width: '260px'
  };

  const cssTelaOperado = {
    fontSize: 25,
    color: '#fff',
    height: 20
  };

  const cssTelaRes = {
    fontSize: 50,
    color: '#fff',
  };

  const cssBtn = {
    color: 'white',
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: '#000',
    borderColor: '#000',
    textAlign: 'center',
    outline: 'none'
  };



  return (
    <>
      <div style={cssContainer}>
        <h3>Calculadora matemática simples</h3>
        {Tela(valorTela, resultado)}
        <div style={cssBotoes}>
          {Btn('AC', limparMemoria)}
          {Btn('(', () => addDigitoTela('('))}
          {Btn(')', () => addDigitoTela(')'))}
          {Btn('/', () => addDigitoTela('/'))}
          {Btn('7', () => addDigitoTela('7'))}
          {Btn('8', () => addDigitoTela('8'))}
          {Btn('9', () => addDigitoTela('9'))}
          {Btn('*', () => addDigitoTela('*'))}
          {Btn('4', () => addDigitoTela('4'))}
          {Btn('5', () => addDigitoTela('5'))}
          {Btn('6', () => addDigitoTela('6'))}
          {Btn('-', () => addDigitoTela('-'))}
          {Btn('1', () => addDigitoTela('1'))}
          {Btn('2', () => addDigitoTela('2'))}
          {Btn('3', () => addDigitoTela('3'))}
          {Btn('+', () => addDigitoTela('+'))}
          {Btn('0', () => addDigitoTela('0'))}
          {Btn('.', () => addDigitoTela('.'))}
          {Btn('<<', () => operacao('bs'))}
          {Btn('=', () => operacao('='))}
        </div>
      </div>
    </>
  );
};

export default App;

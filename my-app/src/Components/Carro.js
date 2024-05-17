import React from 'react';

export default class Carro extends React.Component {
  constructor(props) {
    super(props);
    this.modelo = 'Golf';
    this.state = {
      ligado: false,
      velAtual: 0,

    };
  }

  ligarDesligar() {
    // this.setState({ ligado: !this.state.ligado });
    this.setState(
      (state) => (
        { ligado: !state.ligado }
      )
    );
  }

  /*
  acelerar() {                  //// Modelo 1
    this.setState(
      { velAtual: this.state.velAtual + this.props.fator }
    );
  } */

  acelerar() {                 //// Modelo 2 (Dar preferencia pra este modelo de forma geral)
    this.setState(
      (state, props) => (
        { velAtual: state.velAtual + props.fator }
      )
    );
  }

  render() {
    return (
      <div>
        <h1>Meu carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado ? "sim" : "não"}</p>
        <p>Velocidade atual: {this.state.velAtual}</p>
        <button onClick={() => this.ligarDesligar()}>{this.state.ligado ? "Desligar" : "Ligar"} </button>
        <button onClick={() => this.acelerar()}>Acelerar</button>
      </div>
    );
  }
}

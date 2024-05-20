import React from 'react';

export default class BaseClasse extends React.component {

  constructor(props) {
    // Para permitir o uso de props
    super(props);

    // State
    this.state = {
      canal: 'CFB cursos',
      curso: 'React',
      ativo: true,
      nome: this.props.nomeAluno
    };
    this.status = this.props.status;

    // Bindagem
    let ad = ativarDesativar.bind(this);

    // intruções do construtor
  }

  // Função para manipular state
  ativarDesativar() {
    this.setState(
      state => ({
        ativo: !state.ativo
      })
    );
  }

  componentDidMount() {
    console.log('O componente foi criado');
  }

  componentDidUpdate() {
    console.log('O componente foi atualizado');
  }

  componentWillUnmount() {
    console.log('O componente foi removido');
  }

  render() {
    return (
      <>
        <h1>Componente de Classe</h1>
        {/* chamada da função com bind */}
        <button onClick={this.ad}> Ativar/Desativar </button>
        <button onClick={() => this.ativarDesativar}> Ativar/Desativar </button>
      </>
    );
  }
}

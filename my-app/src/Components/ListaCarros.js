import React from 'react';
import axios from 'axios';

export default class ListaCarros extends React.Component {

  state = {
    carros: []
  };

  componentDidMount() {
    axios.get('https://aa3181fd-69ad-4a4e-84b5-a5204fa73158-00-lq72kyyhqfwq.worf.replit.dev/').then(res => {
      const dadosCarros = res.data;
      this.setState({ carros: dadosCarros });
    });

  }

  render() {
    return (
      <div>
        {this.state.carros.map(
          carro => <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
        )}
      </div>
    );
  }
}

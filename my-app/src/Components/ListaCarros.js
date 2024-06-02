import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListaCarros() {

  const [carros, setCarros] = useState([]);

  useEffect(() => {
    axios.get('https://aa3181fd-69ad-4a4e-84b5-a5204fa73158-00-lq72kyyhqfwq.worf.replit.dev/').then(res => {
      const dadosCarros = res.data;
      setCarros(dadosCarros);
    });
  });



  return (
    <div>
      {carros.map(
        carro => <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
      )}
    </div>
  );
}

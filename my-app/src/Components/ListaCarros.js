import React, { useState, useEffect } from 'react';


export default function ListaCarros() {

  const [carros, setCarros] = useState([]);

  useEffect(() => {
    fetch('https://aa3181fd-69ad-4a4e-84b5-a5204fa73158-00-lq72kyyhqfwq.worf.replit.dev/')
      .then(res => res.json())
      .then(
        (resultado) => {
          setCarros(resultado);
        }
      );
  });




  return (
    <div>
      {carros.map(
        carro => <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
      )}
    </div>
  );
};

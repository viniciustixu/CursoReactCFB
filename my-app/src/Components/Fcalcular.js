import React, { useState } from 'react';
import Fresultado from './Fresultado';

export default function Fcalcular({ peso, altura, setResultado }) {

  const [res, setRes] = useState(0);

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    const imc = pesoNum / (alturaNum * alturaNum);


    setResultado(imc);
    setRes(imc);
    <Fresultado resultado={imc} />;
  };

  return (
    <div>
      <button onClick={calcularIMC}>Calcular</button>
      <Fresultado resultado={res.toFixed(2)} />
    </div>
  );
};

import React, { useState } from 'react';
import verde from './imgs/verde.jpg';
import vermelho from './imgs/Vermelho.jpg';



export default function Led() {

  const [ligado, setLigado] = useState(false);

  return (
    <>
      <img src={ligado ? verde : vermelho} style={{ maxWidth: '100px' }} alt="imagem" />
      <button onClick={() => setLigado(!ligado)}>{ligado ? 'Desligar' : 'Ligar'}</button>
    </>
  );
};

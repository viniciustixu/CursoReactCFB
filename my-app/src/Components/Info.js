import React from 'react';
import Globais from './Globais';



function Info() {

  return (
    <>
      <p>{'Canal: ' + Globais.canal}</p>
      <p>{'Curso: ' + Globais.curso}</p>
      <p>{'Ano: ' + Globais.ano}</p>
      <hr />
    </>
  );
};

export default Info;

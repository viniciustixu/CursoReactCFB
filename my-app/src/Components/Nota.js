import React from 'react';

export default function Nota(props) {
  return (
    <div>
      <legend>informe a nota: {props.num}</legend>
      <input type="text" name={props.nome} value={props.notas} onChange={(e) => props.setNota(e)} />
    </div>
  );
}
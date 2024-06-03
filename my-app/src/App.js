import React from "react";



function ListaNumeros(props) {
  const num = props.numeros;
  const listinha = num.map(
    (n) => <li key={n}> {n} </li>
  );
  return (
    <ul>{listinha}</ul>
  );
}

const array_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function App() {
  return (
    <>
      <ListaNumeros numeros={array_numeros} />
    </>
  );
}

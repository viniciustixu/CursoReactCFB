import React from 'react';

export default function Caixa(props) {
  return (
    <>
      <h2>H2</h2>
      <p>{props.site}</p>
      {/* <p>{props.children}</p> */}
      <p>{props.children[2]}</p>
    </>
  );
}

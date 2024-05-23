import React from 'react';

export default function Faltura(props) {
  const handleAlturaChange = (event) => {
    props.setAltura(event.target.value);
  };

  return (
    <div>
      <label>
        Altura:
        <input type="number" value={props.altura} onChange={handleAlturaChange} />
      </label>
    </div>
  );
}

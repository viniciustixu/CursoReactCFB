import React from 'react';

export default function Fpeso({ peso, setPeso }) {
  const handlePesoChange = (event) => {
    setPeso(event.target.value);
  };

  return (
    <div>
      <label>
        Peso:
        <input type="number" value={peso} onChange={handlePesoChange} />
      </label>
    </div>
  );
}

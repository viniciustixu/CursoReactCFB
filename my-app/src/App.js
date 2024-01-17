import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Numero from './Components/Numero';


function App() {

  const [num, setNum] = useState(10);

  return (
    <>
      <p>Valor do state num em App: {num}</p>
      <Numero num={num} setNum={setNum} />
    </>
  );
}

export default App;

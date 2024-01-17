import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Led from './Components/Led';


function App() {

  const [ligado, setLigado] = useState(false);

  return (
    <>
      <Led />
    </>
  );
}

export default App;

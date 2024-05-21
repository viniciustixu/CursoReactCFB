import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Globais from './Components/Globais';
import Info from './Components/Info';



function App() {

  const [resumo, setResumo] = useState(Globais.resumo);

  const gravarResumo = () => {
    Globais.resumo = resumo;
  };

  const verResumo = () => {
    alert(Globais.resumo);
  };

  return (
    <>
      <p>{'Canal: ' + Globais.canal}</p>
      <p>{'Curso: ' + Globais.curso}</p>
      <p>{'Ano: ' + Globais.ano}</p>
      <hr />
      <Info />
      <input type="text" size='70' value={resumo} onChange={(e) => setResumo(e.target.value)} />
      <button onClick={() => gravarResumo()}>Gravar Resumo</button>
      <button onClick={() => verResumo()}>Ver Resumo</button>
    </>
  );
};

export default App;

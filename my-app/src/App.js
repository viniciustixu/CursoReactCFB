import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Pagina1 from './Components/Pagina1';
import Pagina2 from './Components/Pagina2';


function App() {

  const [pagina, setPagina] = useState(0);

  useEffect(
    () => {
      const url = window.location.href;
      const res = url.split('?');
      setPagina(res[1]);
    }
  );

  const linksPaginas = (p) => {
    if (p == 1) {
      window.open('http://localhost:3000?1', '_self');
    } else if (p == 2) {
      window.open('http://localhost:3000?2', '_self');
    }
  };

  const retornarPagina = () => {
    if (pagina == 1) {
      return <Pagina1 />;
    } else if (pagina == 2) {
      return <Pagina2 />;
    } else {
      return (
        <div>
          <button onClick={() => linksPaginas(1)}> Pagina 1 </button>
          <button onClick={() => linksPaginas(2)}> Pagina 2 </button>
        </div>
      );
    }
  };


  return (
    <>
      {retornarPagina()}
    </>
  );
};

export default App;

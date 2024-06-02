import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pagina1 from './Components/Pagina1';
import Pagina2 from './Components/Pagina2';


/*
  TO DO:
  Entender o porque de não estar renderizando nada
  nas paginas chamadas usando Router Routes Route
*/


export default function App() {
  return (
    <>
      <Router>
        <header>
          <Link to="/pagina1">Página 1</Link>
          <Link to="/pagina2">Página 2</Link>
        </header>
        <main>
          <Routes>
            <Route exact path="/pagina1" element={<Pagina1 />} />
            <Route exact path="/pagina2" element={<Pagina2 />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

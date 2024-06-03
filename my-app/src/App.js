import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Canal from './Components/Canal';
import Pagina1 from './Components/Pagina1';
import Pagina2 from './Components/Pagina2';

export default function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Canal">Canal</Link>
          <Link to="/Pagina1">Página 1</Link>
          <Link to="/Pagina2">Página 2</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/Canal" element={<Canal />} />
            <Route path="/Pagina1" element={<Pagina1 />} />
            <Route path="/Pagina2" element={<Pagina2 />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

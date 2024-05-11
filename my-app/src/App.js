import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {

  const [form, setForm] = useState({ "nome": "", "curso": "", "ano": "" });

  const handleFormChange = (e) => {
    if (e.target.getAttribute('name') == 'fNome') {
      setForm({ "nome": e.target.value, "curso": form.curso, "ano": form.ano });
    } else if (e.target.getAttribute('name') == 'fCurso') {
      setForm({ "nome": form.nome, "curso": e.target.value, "ano": form.ano });
    } else if (e.target.getAttribute('name') == 'fAno') {
      setForm({ "nome": form.nome, "curso": form.curso, "ano": e.target.value });
    }
  };

  return (
    <>
      <label htmlFor="formNome">Nome</label>
      <input type="text" name="fNome" id="formNome" value={form.nome} onChange={(e) => handleFormChange(e)} />

      <label htmlFor="formCurso">Curso</label>
      <input type="text" name="fCurso" id="formCurso" value={form.curso} onChange={(e) => handleFormChange(e)} />

      <label htmlFor="formAno">Ano</label>
      <input type="text" name="fAno" id="formAno" value={form.ano} onChange={(e) => handleFormChange(e)} />

      <p>Nome digitado: {form.nome} </p>
      <p>Curso digitado: {form.curso} </p>
      <p>Ano digitado: {form.ano} </p>
    </>
  );
};

export default App;

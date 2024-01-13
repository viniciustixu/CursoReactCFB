import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Dados from './Components/Dados';



function App() {

  const animal1 = 'Girafa';
  const animal2 = 'Zebra';
  const animal3 = 'Cachorro';

  const soma = (a, b) => {
    return a + b;
  };

  return (
    <>
      <p>{animal1}</p>
      <p>{animal2}</p>
      <Header />
      <Body />
      <Dados atributo1='atributo1' atributo2='atributo2' atributo3={animal3} soma={soma} />
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';

function App() {

  const animal1 = 'Girafa';
  const animal2 = 'Zebra';

  return (
    <>
      <p>{animal1}</p>
      <p>{animal2}</p>
      <Header />
      <Body />
    </>
  );
}

export default App;

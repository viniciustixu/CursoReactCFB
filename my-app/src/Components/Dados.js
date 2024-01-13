export default function Dados(props) {

  let n1 = 10;
  let n2 = 5;
  const estiloTexto = {
    color: '#00f',
    fontSize: '10px', ize: '10px',
  };



  return (
    <section>
      <section className='caixa'>
        <p style={{ color: '#f00', fontSize: '2em' }}>paragrafo 1 = {props.atributo1}</p>
        <p style={estiloTexto}>paragrafo 2 = {props.atributo2}</p>
        <p>paragrafo 3 = {props.atributo3}</p>
        <p>{`A soma entre ${n1} e ${n2} é ${props.soma(n1, n2)}`}</p>
      </section>
    </section>
  );
}

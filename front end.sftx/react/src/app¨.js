import React, { useState } from 'react';
import Contador from './Contador';

function App() {
  const [valor, setValor] = useState(0);

  const incrementarValor = () => {
    setValor(valor + 1);
  }

  return (
    <div>
      <Contador valor={valor} incrementarValor={incrementarValor} />
    </div>
  );
}

export default App;

import React from 'react';

function Contador(props) {
  return (
    <div>
      <h1>Valor: {props.valor}</h1>
      <button onClick={props.incrementarValor}>Aumentar valor</button>
    </div>
  );
}

export default Contador;

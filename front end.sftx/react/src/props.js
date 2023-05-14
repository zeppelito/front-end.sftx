import React from 'react';
import Saudacao from './Saudacao';

function App() {
  return (
    <div>
      <Saudacao nome="João" />
    </div>
  );
}

export default App;

import React from 'react';

function Saudacao(props) {
  return (
    <div>
      <h1>Olá, {props.nome}!</h1>
    </div>
  );
}

export default Saudacao;

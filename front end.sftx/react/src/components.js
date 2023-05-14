import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;

import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo à página inicial!</h1>
      <p>Esta é a página inicial da nossa aplicação.</p>
    </div>
  );
};

export default Home;

import React from 'react';

const About = () => {
  return (
    <div>
      <h1>Sobre nós</h1>
      <p>Somos uma empresa especializada em desenvolvimento web.</p>
    </div>
  );
};

export default About;

import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Entre em contato</h1>
      <p>Envie-nos uma mensagem através do formulário abaixo.</p>
    </div>
  );
};

export default Contact;

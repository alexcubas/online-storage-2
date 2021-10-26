import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import paginaInicial from './componentes/paginaInical';
import paginaCart from './componentes/paginaCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ paginaInicial } />
        <Route path="/carrinho" component={ paginaCart } />
      </BrowserRouter>
    </div>
  );
}

export default App;

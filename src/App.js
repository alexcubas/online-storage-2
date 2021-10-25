import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import paginaInicial from './componentes/paginaInical';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={ paginaInicial } />
      </BrowserRouter>
    </div>
  );
}

export default App;

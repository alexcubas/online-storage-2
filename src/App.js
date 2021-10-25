import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PaginaInicial from './componentes/paginaInical';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={ PaginaInicial } />
      </BrowserRouter>
    </div>
  );
}

export default App;

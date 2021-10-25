import React from 'react';

class paginaInicial extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="campoDePesquisa">
          <input type="text" name="campoDePesquisa" />
        </label>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}

export default paginaInicial;

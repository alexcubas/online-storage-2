import React from 'react';
import CartButton from './CartButton';

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
        <CartButton />
      </div>
    );
  }
}

export default paginaInicial;

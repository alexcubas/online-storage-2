import React from 'react';
import PropTypes from 'prop-types';
import { salvarProduto } from '../services/salvarProdutos';

class Produtos extends React.Component {
  constructor() {
    super();
    this.adicionarProduto = this.adicionarProduto.bind(this);
  }

  adicionarProduto(element) {
    /* if (element.quantidade) element.quantidade += 1;
    else element.quantidade = 1; */
    salvarProduto(element);
  }

  render() {
    const { resultado } = this.props;
    return (
      <div>
        {resultado.map((element) => (
          <div
            key={ element.id }
            data-testid="product"
            onMouseDown={ () => this.adicionarProduto(element) }
            onKeyDown={ () => this.adicionarProduto(element) }
            role="button"
            tabIndex={ 0 }
          >
            <p>
              R$
              { element.price }
            </p>
            <p>{ element.title }</p>
            <img src={ element.thumbnail } alt={ element.title } />
          </div>
        ))}
      </div>
    );
  }
}

Produtos.propTypes = {
  resultado: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Produtos;

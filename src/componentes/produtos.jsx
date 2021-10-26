import React from 'react';
import PropTypes from 'prop-types';
import { salvarProduto } from '../services/salvarProdutos';

class Produtos extends React.Component {
  constructor() {
    super();
    this.adicionarProduto = this.adicionarProduto.bind(this);
  }

  adicionarProduto(element) {
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
            onClick={ () => this.adicionarProduto(element) }
            onKeyDown={ () => this.adicionarProduto(element) }
            role="button"
            tabIndex={ 0 }
          >
            <div data-testid="product-add-to-cart">
              <p>
                R$
                { element.price }
              </p>
              <p>{ element.title }</p>
              <img src={ element.thumbnail } alt={ element.title } />
            </div>
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

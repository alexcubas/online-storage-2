import React, { Component } from 'react';
import { removerProduto, pegarProduto } from '../services/salvarProdutos';

class paginaCart extends Component {
  constructor() {
    super();
    this.state = {
      quantidade: 0,
      listaProdutos: [],
    };

    this.pegarListaProdutos = this.pegarListaProdutos.bind(this);
    this.removeProduto = this.removeProduto.bind(this);
  }

  componentDidMount() {
    this.pegarListaProdutos();
  }

  pegarListaProdutos() {
    const lista = pegarProduto();
    this.setState({ listaProdutos: [...lista], quantidade: lista.length });
  }

  removeProduto(item) {
    removerProduto(item);
    this.pegarListaProdutos();
  }

  render() {
    const { quantidade, listaProdutos } = this.state;
    return (
      <div>
        {quantidade === 0 && (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )}
        { listaProdutos.map((item, i) => (
          <div key={ `${item.id}-${i}` }>
            <img src={ item.thumbnail } alt="" />
            <p>{item.title}</p>
            <p>
              R$
              { item.price }
            </p>
            <div>
              <button type="button">-</button>
              <span>{item.order_backend}</span>
              <button type="button">+</button>
            </div>
            <button
              type="button"
              onClick={ () => this.removeProduto(item) }
            >
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default paginaCart;

import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { salvarProduto } from '../services/salvarProdutos';
import CartButton from './CartButton';

class DetalhamentoDoProduto extends React.Component {
  constructor() {
    super();
    this.state = {
      produto: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id, categoryId } } } = this.props;
    getProductsFromCategoryAndQuery(categoryId)
      .then((data) => (data.results))
      .then((results) => {
        this.setState({
          produto: results.find((produto) => (produto.id === id)),
        });
      });
  }

  render() {
    const { produto } = this.state;
    const { attributes } = produto;

    return (
      <div>
        <h3 data-testid="product-detail-name">{ produto.title }</h3>
        <img src={ produto.thumbnail } alt={ produto.title } />
        <p>
          Preço:
          { produto.price }
        </p>aaa
        <h4>Especificações Tecnicas</h4>
        {attributes && attributes.map((atributo) => (
          <p key={ atributo.name }>a
            {`${atributo.name}: ${atributo.value_name}`}
          </p>
        ))}
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => salvarProduto(produto) }
        >
          Adicionar ao carrinho
        </button>
        <CartButton />
      </div>
    );
  }
}

DetalhamentoDoProduto.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      categoryId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DetalhamentoDoProduto;

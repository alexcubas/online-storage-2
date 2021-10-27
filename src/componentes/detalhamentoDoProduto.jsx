import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

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
    const especificações = produto.attributes;

    return (
      <div>
        <h3 data-testid="product-detail-name">{ produto.title }</h3>
        <img src={ produto.thumbnail } alt={ produto.title } />
        <p>
          Preço:
          { produto.price }
        </p>
        <h4>Especificações Tecnicas</h4>
        { especificações.map((element) => (
          <p key={ element.name }>
            { element.name }
          </p>
        )) }
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

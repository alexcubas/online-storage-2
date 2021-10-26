import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Produtos extends React.Component {
  render() {
    const { resultado } = this.props;
    return (
      <div>
        { resultado.map((element) => (
          <div key={ element.id } data-testid="product">
            <p>
              preço
              { element.price }
            </p>
            <Link
              to={ `/detalhe/${element.categor}/${element.id}` }
              data-testid="product-detail-link"
            >
              <p>
                nome
                { element.title }
              </p>
            </Link>
            <img src={ element.thumbnail } alt={ element.title } />
          </div>
        )) }
      </div>
    );
  }
}

Produtos.propTypes = {
  resultado: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Produtos;

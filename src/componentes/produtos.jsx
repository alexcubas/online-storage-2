import React from 'react';
import PropTypes from 'prop-types';

class Produtos extends React.Component {
  render() {
    const { resultado } = this.props;
    return (
      <div>
        {resultado.map((element) => (
          <div key={ element.id } data-testid="product">
            <p>
              preço
              { element.price }
            </p>
            <p>
              nome
              { element.title }
            </p>
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

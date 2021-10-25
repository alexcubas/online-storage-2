import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Produtos from './produtos';

class paginaInicial extends React.Component {
  constructor(props) {
    super(props);

    this.buscandoAPI = this.buscandoAPI.bind(this);
    this.quandoDigitado = this.quandoDigitado.bind(this);

    this.state = {
      campoDePesquisa: '',
      resultado: [],
      digitando: this.quandoDigitado,
    };
  }

  quandoDigitado({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async buscandoAPI() {
    const { campoDePesquisa } = this.state;
    const resultado = await getProductsFromCategoryAndQuery(campoDePesquisa)
      .then((categoria) => categoria.results);
    this.setState({
      resultado,
    });
  }

  render() {
    const { campoDePesquisa, digitando, resultado } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="campoDePesquisa">
            <input
              type="text"
              data-testid="query-input"
              name="campoDePesquisa"
              value={ campoDePesquisa }
              onChange={ digitando }
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.buscandoAPI }
          >
            Pesquisar
          </button>
        </form>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Produtos resultado={ resultado } />
      </div>
    );
  }
}

export default paginaInicial;

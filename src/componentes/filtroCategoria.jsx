import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class FiltroCategoria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    getCategories().then((data) => this.setState({ categorias: data }));
  }

  render() {
    const { categorias } = this.state;
    return (
      <div>
        { categorias.map((categoria) => (
          <div key={ categoria.id }>
            <label data-testid="category" htmlFor={ categoria.id }>
              <input type="radio" name="categoria" id={ categoria.id } />
              { categoria.name }
            </label>
          </div>
        ))}
      </div>
    );
  }
}

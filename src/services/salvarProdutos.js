const ITEM_SELECIONADO = 'produto_selecionado';

const lerListaProdutos = () => JSON.parse(localStorage.getItem(ITEM_SELECIONADO));

const checarProduto = (object) => {
  const listaProdutos = lerListaProdutos();
  const resultado = listaProdutos.find((item) => item.id === object.id);
  console.log(resultado);
  if (resultado) {
    if (resultado.quantidade) {
      console.log('01');
      object.quantidade = resultado.quantidade + 1;
      return true;
    }
    object.quantidade = 1;
    console.log('02');
    return false;
  }
  object.quantidade = 1;
  console.log('03');
  return false;
};

const setarLocalStorage = (elementos) => {
  localStorage
    .setItem(ITEM_SELECIONADO, JSON.stringify(elementos));
};

export const removerProduto = (object) => {
  const listaProdutos = lerListaProdutos();
  setarLocalStorage(listaProdutos
    .filter((item) => item.id !== object.id));
};

export const atualizaItem = (object) => {
  removerProduto(object);
  const listaProdutos = lerListaProdutos();
  setarLocalStorage([...listaProdutos, object]);
};

export const salvarProduto = (object) => {
  const listaProdutos = lerListaProdutos();
  if (listaProdutos !== null) {
    const checagem = checarProduto(object);
    console.log('chech:', checagem);
    if (!checagem) setarLocalStorage([...listaProdutos, object]);
    else {
      atualizaItem(object);
    }
  } else {
    object.quantidade = 1;
    setarLocalStorage([object]);
  }
};

export const pegarProduto = () => {
  const retorno = JSON.parse(localStorage.getItem(ITEM_SELECIONADO));
  return retorno;
};

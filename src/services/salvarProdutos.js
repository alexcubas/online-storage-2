const ITEM_SELECIONADO = 'produto_selecionado';

const lerListaProdutos = () => JSON.parse(localStorage.getItem(ITEM_SELECIONADO));

const checarProduto = (object) => {
  const listaProdutos = lerListaProdutos();
  if (listaProdutos.filter((item) => item.id === object.id)) {
    if (object.quantidade) {
      object.quantidade += 1;
      return true;
    }
    object.quantidade = 1;
    return false;
  }
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

export const salvarProduto = (object) => {
  let listaProdutos = lerListaProdutos();
  if (listaProdutos !== null) {
    const checagem = checarProduto(object);
    console.log(checagem);
    if (!checagem) setarLocalStorage([...listaProdutos, object]);
    else {
      removerProduto(object);
      listaProdutos = lerListaProdutos();
      setarLocalStorage([...listaProdutos, object]);
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

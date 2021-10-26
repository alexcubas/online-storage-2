export async function getCategories() {
  // Implemente aqui
  const resultado = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return resultado;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  if(!categoryId) {
    const resultado = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${query}`)
    .then((response) => response.json());
  return resultado;
  }

  if(!query) {
    const resultado = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
    .then((response) => response.json());
  return resultado;
  }

  const resultado = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
  return resultado;
}

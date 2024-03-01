export default async function getCategories() {
  return fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => json);
}

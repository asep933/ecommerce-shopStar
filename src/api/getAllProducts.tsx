export default function getAllProducts() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}

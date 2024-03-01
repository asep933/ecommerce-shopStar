export default async function getProductById(id: number) {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
}

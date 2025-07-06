export default async function getProducts() {
  let data = await fetch("https://dummyjson.com/products?_limit=10");
  let products = await data.json();
  return products;
}

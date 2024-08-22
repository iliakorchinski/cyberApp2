const fs = require('node:fs/promises');

async function readData() {
  const data = await fs.readFile('products.json', 'utf8');
  return JSON.parse(data);
}

async function getAll() {
  const products = await readData();
  if (!products) {
    throw new Error('Could not find any products');
  }
  return products.products;
}

async function getProduct(id) {
  const products = await readData();
  if (!products.products || products.products.length === 0) {
    throw new Error('Could not find any events.');
  }
  const product = products.products.find((product) => product.id === id);
  return product;
}
exports.getAll = getAll;
exports.getProduct = getProduct;

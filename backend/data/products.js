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
exports.getAll = getAll;

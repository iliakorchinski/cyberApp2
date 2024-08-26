const { readData, writeData } = require('./util');

// async function readData() {
//   const data = await fs.readFile('products.json', 'utf8');
//   return JSON.parse(data);
// }

// async function writeData(data) {
//   await fs.writeFile('products.json', JSON.stringify(data));
// }

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

async function replaceProduct(id, data) {
  const products = await readData();
  if (!products.products || products.products.length === 0) {
    throw new Error('Could not find any events.');
  }
  const index = products.products.findIndex((product) => product.id === id);

  products.products[index] = { ...data, id };

  await writeData(products);
}

async function newProduct(data) {
  const products = await readData();
  products.products.push(data);
  await writeData(products);
}
exports.getAll = getAll;
exports.getProduct = getProduct;
exports.replaceProduct = replaceProduct;
exports.newProduct = newProduct;

const express = require('express');

const bodyParser = require('body-parser');

const { getAll, getProduct } = require('./data/products');

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/products', async (req, res, next) => {
  try {
    const products = await getAll();
    // console.log(res.json({ products: products }));
    res.json({ products: products });
  } catch (err) {
    next(err);
  }
});

app.get('/products/:id', async (req, res, next) => {
  const product = await getProduct(req.params.id);
  console.log(product);
  res.json({ product: product });
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

app.listen(8080, () => {
  console.log('server is running');
});

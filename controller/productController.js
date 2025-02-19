const { products } = require("../utils/getData");
// const fs = require("fs")
// const data = JSON.parse(fs.readFileSync("data.json","utf-8"))
// const products = data.products

const createProducts = (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
};
const getProducts = (req, res) => {
  res.json(products);
};

const getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};
const modifiedProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};
const updatedProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};
const deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
};

module.exports = {
  createProducts,
  getProducts,
  getProduct,
  modifiedProduct,
  updatedProduct,
  deleteProduct,
};

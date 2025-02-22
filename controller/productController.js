const model =require("../model/product")
const Product = model.Product
const createProducts =async (req, res) => {
 const product =  new Product(req.body)
try {
  const result = await product.save()
  res.status(201).json(result)
} catch (error) {
  res.status(400).json(error.message)
}  
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

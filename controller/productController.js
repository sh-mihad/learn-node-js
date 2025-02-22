const model =require("../model/product")
const Product = model.Product

// apis

// product create
const createProducts =async (req, res) => {
 const product =  new Product(req.body)
try {
  const result = await product.save()
  res.status(201).json(result)
} catch (error) {
  res.status(400).json(error.message)
}  
};

// get all products
const getProducts =async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(404).json(error.message)
  }
  
};

// get a product by ID
const getProduct = async(req, res) => {
  try {
    const id = req.params.id
    const product = await Product.findById(id)
    res.status(200).json(product)
  } catch (error) {
    res.status(404).json(error.message)
  }
};

// replace product by ID
const modifiedProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

// update product by ID
const updatedProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};

// delete product by ID
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

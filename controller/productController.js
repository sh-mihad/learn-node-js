const model = require("../model/product");
const Product = model.Product;

// apis

// product create
const createProducts = async (req, res) => {
  const product = new Product(req.body);
  try {
    const result = await product.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// get all products
const getProducts = async (req, res) => {
  const page = req.query.page;
  const pageSize = req.query.pageSize;
  try {
    const products = await Product.find().skip(pageSize*(page-1)).limit(pageSize);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

// get a product by ID
const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

// replace product by ID -- put method
const modifiedProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      returnDocument: "after",
    });

    res.json(product);
  } catch (error) {
    res.status(404).json(error);
  }
};

// update product by ID
const updatedProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      { upsert: true, new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(404).json(error);
  }
};

// delete product by ID
const deleteProduct = async (req, res) => {
  const id = req.params.id;
try {
  const result = await Product.findOneAndDelete(id)
  res.send(result)
} catch (error) {
  res.status(404).json(error);
}
};

module.exports = {
  createProducts,
  getProducts,
  getProduct,
  modifiedProduct,
  updatedProduct,
  deleteProduct,
};

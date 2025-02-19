const express = require("express");
const productController = require("../controller/productController")
//router
const router = express.Router();
router
  .post("/",productController.createProducts)
  .get("/",productController.getProducts)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.modifiedProduct)
  .patch("/:id", productController.updatedProduct)
  .delete("/:id", productController.deleteProduct);

  exports.router = router;  
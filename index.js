const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const productRouter = require("./router/productRouter")
const productController = require("./controller/productController")
const express = require("express");
// const morgan = require("morgan");
const server = express();




//bodyParser
server.use(express.json());
// server.use(morgan("default"));
server.use(express.static("public"));


// router
server.use("/products",productRouter.router)
// server.get("/products",productController.getProducts)

server.listen(8080, () => {
  console.log("server started");
});

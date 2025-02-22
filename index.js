
const productRouter = require("./router/productRouter")
const userRouter = require("./router/userRouter")
const express = require("express");
const mongoose = require('mongoose');


// const morgan = require("morgan");
const server = express();
server.use(express.json());


// mongoose connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("database connected");
}

// router
server.use("/products",productRouter.router)
server.use("/users",userRouter.router)

server.listen(8080, () => {
  console.log("server started");
});

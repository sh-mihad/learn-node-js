const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const productRouter = require("./router/productRouter")
const userRouter = require("./router/userRouter")
const express = require("express");
const mongoose = require('mongoose');
const { Schema } = mongoose;

// const morgan = require("morgan");
const server = express();
server.use(express.json());

// user name : sh_mihad
// user pass : NInYcw1ubjxDEeyk

// mongoose connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017');
  console.log("database connected");
}

// product schema
const productSchema = new Schema({
  title:String,
  description:String,
  price:Number,
  discountPercentage:String,
  rating:Number,
  brand:String,
  category:String,
  thumbnail:String,
  images:[String],
   
})


// router
server.use("/products",productRouter.router)
server.use("/users",userRouter.router)

server.listen(8080, () => {
  console.log("server started");
});

const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const productRouter = require("./router/productRouter")
const userRouter = require("./router/userRouter")
const express = require("express");
// const morgan = require("morgan");
const server = express();
server.use(express.json());


// router
server.use("/products",productRouter.router)
server.use("/users",userRouter.router)

server.listen(8080, () => {
  console.log("server started");
});

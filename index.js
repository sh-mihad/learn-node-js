
const productRouter = require("./router/productRouter")
const userRouter = require("./router/userRouter")
const taskRouter = require('./router/taskRouter')
const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config()
const jwt = require('jsonwebtoken');
// const morgan = require("morgan");
const server = express();
server.use(express.json());


// mongoose connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("database connected");
}


server.use((req,res,next)=>{
  const token = req.headers.authorization.split(" ")[1]
  // const token = req.get(Bearer)
  jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
    console.log(decoded)
    if(decoded){
      next()
    }else{
      res.status(401).send("Unauthorized token")
    }
  });
})
// router
server.use("/products",productRouter.router)
server.use("/users",userRouter.router)
server.use("/tasks",taskRouter.router)

server.listen(8080, () => {
  console.log("server started");
});

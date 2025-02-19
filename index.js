const fs = require("fs")
const express = require("express")
const data = fs.readFileSync("./data.json","utf-8")
const index = fs.readFileSync("./index.html","utf-8")

const app = express()
app.use(express.json())
const port = 9000

// app.use((req,res,next)=>{
//     console.log("Logged");
//     next()
// })

app.use(myLogger)

function myLogger (req,res,next){
    next()
}

app.get("/",(req,res)=>{
    // res.send("<h1>hello world</h1>")
    res.send(index)
})
app.post("/",(req,res)=>{
    // res.send("<h1>hello world</h1>")
    console.log("req.body",req.body);
    res.send({"method":"post"})
})


app.listen(port,()=>{
    console.log("server running");
})
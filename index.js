const http = require('node:http');
const portNumber = process.env.PORT_NUMBER

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type"," text/html")
    res.end("<h1>hello mello</h1>")
})

server.listen(portNumber,()=>{
    console.log("server is running port",portNumber);
})



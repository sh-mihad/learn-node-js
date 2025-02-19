const fs = require("fs")
const data = JSON.parse(fs.readFileSync("data.json","utf-8"))
const products = data.products
const users = data.users

module.exports={products,users}
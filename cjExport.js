// common js module export

exports.sum =(a,b)=>{
    return a + b
}
exports.dif =(a,b)=>{
    return a - b
}

// module.exports = {sum,dif}   // that is another way
console.log("module exports",module.exports);
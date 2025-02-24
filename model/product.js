const mongoose = require('mongoose');
const { Schema } = mongoose;

// product schema
const productSchema = new Schema({
    title:{type:String,required:true,unique:true},
    description:String,
    price:{type:Number,min:[0,"Price will be positive number"],required:true},
    discountPercentage:{type:Number,min:[0,"Discount will be positive number"],max:[100,"you cna't give discount more than 100%"]},
    rating:{type:Number,min:[0,"Rating will be positive number"],max:[5,"you cna't give rating  more than 5"]},
    brand:{type:String,required:true},
    category:{type:String,required:true},
    thumbnail:{type:String},
    images:[String],
     
  })
  
  // model
const Product = mongoose.model("Product",productSchema)

module.exports = {Product}
const mongoose = require("mongoose")
const {Schema } = mongoose

const taskSchema = new Schema({
    title:{type:String,required:true},
    status:{type:Boolean, default:false},
    date : {type:Date, default:Date.now}
})

const Task = mongoose.model("Task",taskSchema)

module.exports={Task}
const mongoose = require("mongoose");
const { Schema } = mongoose;


// const addressSchema = new Schema({
//   pincode: {
//     type: String,
//     required: true,
//   },
//   street: { type: String, required: true },
//   phone: {
//     type: String,
//     required: true,
//     validate: {
//       validator: function (v) {
//         return /^\d{11}$/.test(v);
//       },
//       message: props=>`${props.value} is not a valid number`,
//     },
//   },
// });

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String,  required: true },
  email: {
    type: String,
    required: true,
    unique:true,
    validate: {
      validator: function (v) {
        return /^\S+@\S+\.\S+$/.test(v);  
      },
      message: props=>`${props.value} is not a valid email`,
    },
  },
  password:{type:String,minlength:6,required:true},
  token:String
});

const User = mongoose.model("User", userSchema);

module.exports = { User };

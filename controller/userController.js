const { users } = require("../utils/getData");
const {User} = require("../model/user")
const jwt = require('jsonwebtoken');


const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (error) {
    res.status(404).json(error.message)
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id)
    res.send(user)
  } catch (error) {
    res.status(404).json(error.message)
  }
 
};
const modifiedUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOneAndReplace({_id:id},req.body,{returnDocument:"after"})
    res.send(user)
  } catch (error) {
    res.status(404).json(error.message)
  }
};
const updatedUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate({_id:id},req.body,{new:true})
    res.send(user)
  } catch (error) {
    res.status(404).json(error.message)
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id)
    res.send(user)
  } catch (error) {
    res.status(404).json(error.message)
  }
};

module.exports = {
  deleteUser,
  getUser,
  getUsers,
  modifiedUser,
  updatedUser,
};

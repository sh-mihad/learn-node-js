const { users } = require("../utils/getData");
const {User} = require("../model/user")

const createUser =async (req, res) => {
  const userResult = new User(req.body)
  try {
    const result = await userResult.save()
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
};
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
  createUser,
  deleteUser,
  getUser,
  getUsers,
  modifiedUser,
  updatedUser,
};

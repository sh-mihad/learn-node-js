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
const getUsers = (req, res) => {
  
};

const getUser = (req, res) => {
  const id = req.params.id;
 
};
const modifiedUser = (req, res) => {
  const id = req.params.id;
 
};
const updatedUser = (req, res) => {
  const id = req.params.id;
 
};
const deleteUser = (req, res) => {
  const id = req.params.id;
 
};

module.exports = {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  modifiedUser,
  updatedUser,
};

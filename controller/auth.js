const { User } = require("../model/user");
const jwt = require("jsonwebtoken");
const path = require("node:path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const privateKy = fs.readFileSync(
  path.resolve(__dirname, "../private.key"),
  "utf-8"
);

const signUp = async (req, res) => {
  try {
    const user = new User(req.body);
    user.token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
    user.password = bcrypt.hashSync(req.body.password, 10);
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const login = async (req, res) => {
  try {
    const doc = await User.findOne({ email: req.body.email });
    const isPassword = bcrypt.compareSync(req.body.password, doc.password);
    const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
    if (isPassword) {
      doc.token = token;

      const result = await doc.save();
      res.json(result);
    }else{
        res.status(400).json("incorrect password");
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = { signUp, login };

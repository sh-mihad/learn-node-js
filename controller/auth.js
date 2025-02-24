const {User} = require("../model/user")
const jwt = require('jsonwebtoken')

const signUp =async (req, res) => {
    const user = new User(req.body)
    user.token = jwt.sign({email:req.body.email}, process.env.SECRET_KEY)
    
    try {
      const result = await user.save()
      res.status(201).json(result)
    } catch (error) {
      res.status(400).json(error.message)
    }
  };

module.exports={signUp}
const express = require("express")
const userController = require("../controller/userController")
const router = express.Router()

router
    .post("/",userController.createUser)
    .get("/",userController.getUsers)
    .get("/:id",userController.getUser)
    .put("/:id",userController.modifiedUser)
    .patch("/:id",userController.updatedUser)
    .delete("/:id",userController.deleteUser)


module.exports.router = router
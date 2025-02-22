const express = require("express")
const router = express.Router()
const taskController = require("../controller/taskController")

router
 .post("/",taskController.createTask)
 .get("/",taskController.getAllTasks)
 .get("/:id",taskController.getTaskById)
 .patch("/:id",taskController.updateTaskById)
 .delete("/:id",taskController.deleteTaskById)



 module.exports={router}
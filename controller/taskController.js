const mongoose = require("mongoose");
const { Task } = require("../model/task");

const createTask = async (req, res) => {
  const task = new Task(req.body);
  try {
    const result = await task.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(404).json(error);
  }
};
const updateTaskById = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(404).json(error);
  }
};
const deleteTaskById = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};

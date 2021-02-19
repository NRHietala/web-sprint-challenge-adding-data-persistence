const express = require("express");
const Task = require("./model");

const router = express.Router();

const { validateTaskPost } = require("../middleware/middleware");

router.get("/", async (req, res, next) => {
  try {
    const data = await Task.getAll();
    res.json(
      data.map(task => {
        return { ...task, task_completed: !!task.task_completed };
      })
    );
  } catch (error) {
    next(error);
  }
});

router.post("/", validateTaskPost, async (req, res, next) => {
  try {
    const data = await Task.insert(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  res.status(500).json({
    info: "Error occurred inside taskRouter",
    message: error.message,
    stack: error.stack,
  });
});

module.exports = router;

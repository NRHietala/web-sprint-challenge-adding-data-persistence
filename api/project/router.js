const express = require("express");
const Project = require("./model");

const router = express.Router();

const { validateProjectPost } = require("../middleware/middleware");

router.get("/", async (req, res, next) => {
  try {
    const data = await Project.getAll();
    res.json(
      data.map(project => {
        // altering binary boolean to text value
        return { ...project, project_completed: !!project.project_completed };
      })
    );
  } catch (error) {
    next(error);
  }
});

router.post("/", validateProjectPost, async (req, res, next) => {
  try {
    const data = await Project.insert(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  res.status(500).json({
    info: "Error occurred inside projectRouter",
    message: error.message,
    stack: error.stack,
  });
});

module.exports = router;

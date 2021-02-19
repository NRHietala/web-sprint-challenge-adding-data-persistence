const express = require("express");
const Resource = require("./model");

const router = express.Router();

const { validateResourcePost } = require("../middleware/middleware");

router.get("/", async (req, res, next) => {
  try {
    const data = await Resource.getAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", validateResourcePost, async (req, res, next) => {
  try {
    const data = await Resource.insert(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  res.status(500).json({
    info: "Error occurred inside resourceRouter",
    message: error.message,
    stack: error.stack,
  });
});

module.exports = router;

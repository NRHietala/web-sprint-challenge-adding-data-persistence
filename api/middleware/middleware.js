function validateProjectPost(req, res, next) {
  const { name, budget } = req.body;

  if (name && budget) {
    next();
  } else {
    res.status(400).json({ message: "Missing required field" });
  }
}

function validateResourcePost(req, res, next) {
  const { name, budget } = req.body;

  if (name && budget) {
    next();
  } else {
    res.status(400).json({ message: "Missing required field" });
  }
}

function validateTaskPost(req, res, next) {
  const { name, budget } = req.body;

  if (name && budget) {
    next();
  } else {
    res.status(400).json({ message: "Missing required field" });
  }
}

module.exports = {
  validateProjectPost,
  validateResourcePost,
  validateTaskPost,
};

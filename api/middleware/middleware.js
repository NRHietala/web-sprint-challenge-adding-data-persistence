function validateProjectPost(req, res, next) {
  const { project_name, project_completed } = req.body;

  if (project_name) {
    req.body.project_completed ? 1 : 0;
    next();
  } else {
    res.status(400).json({ message: "Missing required field" });
  }
}

function validateResourcePost(req, res, next) {
  const { resource_name } = req.body;

  if (resource_name) {
    next();
  } else {
    res.status(400).json({ message: "Missing required field" });
  }
}

function validateTaskPost(req, res, next) {
  const { task_description, project_id } = req.body;

  if (task_description && project_id) {
    req.body.task_completed ? 1 : 0;
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

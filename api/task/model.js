const db = require("../../data/dbConfig");

const getAll = () => {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
};

const insert = data => {
  return db("tasks")
    .insert(data)
    .then(([id]) => {
      return db("tasks").where("task_id", id).first();
    });
};

module.exports = {
  getAll,
  insert,
};

// SQL Query
// select
// t.task_id, t.task_description,t.task_notes, t.task_completed,p.project_name,p.project_description
// from tasks t
// join projects p
// on t.project_id

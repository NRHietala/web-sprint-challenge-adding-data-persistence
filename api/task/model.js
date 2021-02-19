const db = require("../../data/dbConfig");

const getAll = () => {
  return db("tasks");
};

const insert = data => {
  return db("tasks")
    .insert(data)
    .then(([id]) => {
      return db("tasks").where("id", id).first();
    });
};

module.exports = {
  getAll,
  insert,
};

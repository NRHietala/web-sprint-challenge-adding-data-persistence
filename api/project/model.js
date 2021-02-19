const db = require("../../data/dbConfig");

const getAll = () => {
  return db("projects");
};

const insert = data => {
  return db("projects")
    .insert(data)
    .then(([id]) => {
      return db("projects").where("id", id).first();
    });
};

module.exports = {
  getAll,
  insert,
};

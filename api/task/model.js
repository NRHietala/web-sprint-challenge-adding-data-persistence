const db = require("../../data/dbConfig");

const getAll = () => {
  return db("tasks");
};

const insert = data => {};

module.exports = {
  getAll,
  insert,
};

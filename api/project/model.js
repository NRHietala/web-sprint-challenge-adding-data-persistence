const db = require("../../data/dbConfig");

const getAll = () => {
  return db("projects");
};

const insert = data => {};

module.exports = {
  getAll,
  insert,
};

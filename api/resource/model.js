const db = require("../../data/dbConfig");

const getAll = () => {
  return db("resources");
};

const insert = data => {};

module.exports = {
  getAll,
  insert,
};

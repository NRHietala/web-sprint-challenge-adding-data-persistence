const db = require("../../data/dbConfig");

const getAll = () => {
  return db("resources");
};

const insert = data => {
  return db("resources")
    .insert(data)
    .then(([id]) => {
      return db("resources").where("resource_id", id).first();
    });
};

module.exports = {
  getAll,
  insert,
};

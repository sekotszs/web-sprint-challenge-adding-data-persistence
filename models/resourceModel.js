const db = require("../data/dbconfig");

function find() {
  return db("resource");
}

function findById(id) {
  return db("resource").where("id", id).first();
}

function addResource(resourceData) {
  return db("resource").insert(resourceData);
}

module.exports = {
    find,
    findById,
    addResource
}
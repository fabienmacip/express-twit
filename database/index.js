const mongoose = require("mongoose");
const path = require("path");

const dbIds = require(path.join(__dirname, "..", "env.js"));

exports.clientPromise = mongoose
  .connect(dbIds)
  .then(() => {
    console.log("connexion bd ok !!!");
  })
  .catch((err) => {
    console.log(err);
  });

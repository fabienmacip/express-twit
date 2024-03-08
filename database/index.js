const mongoose = require("mongoose");
const path = require("path");

const dbIds = require(path.join(__dirname, "..", "env.js"));

//const env = require(`../environment/${process.env.NODE_ENV}`);

/* exports.clientPromise = mongoose
  .connect(env.dbUrl)
  .then((m) => {
    console.log("connexion bd ok !!!");
    return m;
  })
  .catch((err) => {
    console.log(err);
  });
 */
exports.clientPromise = mongoose
  .connect(dbIds)
  .then((m) => {
    console.log("connexion bd ok !!!");
    return m;
  })
  .catch((err) => {
    console.log(err);
  });

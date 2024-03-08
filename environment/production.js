const path = require("path");

const dbIds = require(path.join(__dirname, "..", "env.js"));

module.exports = {
  dbUrl: dbIds,
  cert: path.join(__dirname, ""),
  key: path.join(__dirname, ""),
};

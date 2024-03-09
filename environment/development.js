const path = require("path");

const dbIds = require(path.join(__dirname, "..", "env.js"));

module.exports = {
  dbUrl: dbIds,
  cert: path.join(__dirname, "../ssl/local.crt"),
  key: path.join(__dirname, "../ssl/local.key"),
  portHttp: 3000,
  portHttps: 3001,
};

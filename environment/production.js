const path = require("path");

const dbIds = require(path.join(__dirname, "..", "env.js"));

module.exports = {
  dbUrl: dbIds,
  cert: "/etc/letsencrypt/live/www.test-twit.fr/fullchain.pem",
  key: "/etc/letsencrypt/live/www.test-twit.fr/privkey.pem",
  portHttp: 80,
  portHttps: 443,
};

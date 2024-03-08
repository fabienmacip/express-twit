const express = require("express");
const morgan = require("morgan");
const path = require("path");
const index = require("./routes");
const errorHandler = require("errorhandler");

require("./database");

const app = express();
module.exports = app;

// To delete
//const port = process.env.PORT || 4000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

require("./config/session.config");
require("./config/passport.config");

app.use(morgan("short"));
// DEBUG - dev
/* 
const fs = require("fs");
app.use(morgan("combined"));
const writeLogStream = fs.createWriteStream(
  path.join(__dirname, "errors.log"),
  { flags: "a" }
);
app.use(
  morgan("combined", {
    skip: (req, res) => res.statusCode < 400,
    stream: writeLogStream,
  })
); */
// FIN DEBUG - dev

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    const code = err.code || 500;
    res.status(code).json({
      code: code,
      message: code === 500 ? null : err.message,
    });
  });
}

//app.listen(port);

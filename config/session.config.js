const app = require("../app");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { clientPromise } = require("../database");

const twoWeeks = 60 * 60 * 24 * 14;

app.use(
  session({
    secret: "mlkjqsdf1234",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: 1000 * twoWeeks,
    },
    store: MongoStore.create({
      clientPromise: clientPromise.then((m) => m.connection.getClient()),
      ttl: twoWeeks,
    }),
  })
);

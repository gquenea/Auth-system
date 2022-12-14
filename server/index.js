const express = require("express");
const app = express();
const port = 3001;
const Pool = require("pg").Pool;
require("dotenv").config();
var jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const bcrypt = require("bcrypt");
const saltRounds = 10;
var router = express.Router();

app.set("superSecret", "success is inevitable");

const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

function gateKeeper(req, res, next) {
  var token = req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, app.get("superSecret"), function (err, decoded) {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Failed to authenticate token.",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: "No token provided.",
    });
  }
}

router.post("/register", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const passhash = req.body.password;

  bcrypt.hash(passhash, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    pool.query(
      "INSERT INTO users (firstname, lastname, email, passhash) VALUES ($1,$2,$3,$4);",

      [firstname, lastname, email, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const passhash = req.body.passhash;

  pool.query(
    "SELECT * FROM users WHERE email = $1;",
    [email],
    (err, result) => {
      if (err) {
        res.status(401).json({
          success: false,
          message: "Authentication failed. user not found.",
        });
      }
      console.log(result);
      if (
        result != undefined &&
        result.rows != undefined &&
        result.rows.length > 0
      ) {
        var user = result.rows[0];
        bcrypt.compare(passhash, user.passhash, (error, response) => {
          if (response) {
            var token = jwt.sign(user, app.get("superSecret"), {
              expiresIn: "1m",
            });
            res.status(200).json({
              success: true,
              message: "Enjoy your token " + user.firstname + "!",
              token: token,
            });
          } else {
            res.status(401).json({
              success: false,
              message: "Authentication failed. Wrong password.",
            });
          }
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Authentication failed. user not found.",
        });
      }
    }
  );
});

router.get("/data", (req, res, next) => {
  gateKeeper(req, res, next);
  res.json({
    data: "here is my data",
  });
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

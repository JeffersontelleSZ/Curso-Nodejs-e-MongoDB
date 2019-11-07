const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

consign()
  .include("app/routes")
  .then("config/dbConection.js")
  .then("app/models")
  .then("app/controllers")
  .into(app);

module.exports = app;

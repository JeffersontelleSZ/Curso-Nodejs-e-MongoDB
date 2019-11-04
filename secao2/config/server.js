const express = require("express");
const consign = require("consign");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");

consign()
  .include("app/routes")
  .then("config/dbConection.js")
  .into(app);

module.exports = app;

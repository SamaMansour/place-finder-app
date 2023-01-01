var createError = require("http-errors");
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.listen(5000, function () {
  console.log("App serving on: 5000");
});
module.exports = app;

const express = require("express");
const mongoose = require("mongoose");

var app = express();

mongoose
  .connect("mongodb://localhost:27017/kltn", { useNewUrlParser: true })
  .then(
    () => {
      console.log("Connected to MongoDB");
    },
    (err) => {
      console.log(err);
    }
  );

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(3003, function () {
  console.log("Example app listening on port 3003!");
});

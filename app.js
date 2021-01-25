const express = require("express");
const app = express();
const port = 3000;

// GET a car
app.get("/garage/car/:id", function (req, res) {
  res.send("retrieved a car in garage with id" + req.params.id);
});

// Create a car
app.post("/garage/car/", function (req, res) {
  res.send("created a car in garage");
});

// Get a member
app.get("/house/member/:id", function (req, res) {
  res.send("retrieved a member of the house with id" + req.params.id);
});

// Add a member
app.post("/house/member", function (req, res) {
  res.send("added a member to the house");
});

console.log("Listening to port "+port);
app.listen(port);

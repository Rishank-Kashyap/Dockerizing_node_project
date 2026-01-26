const express = require("express");

const app = express();

app.get("/home", (req, res, next) => {
  res.status(200).json({ message: "You are at Home Page" });
});

app.listen(3000, () => {
  console.log("App started at port 3000");
});

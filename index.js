const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get("/home", (req, res, next) => {
  res.status(200).json({ message: "You are at Home Page" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});

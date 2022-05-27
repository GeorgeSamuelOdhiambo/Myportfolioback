const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();

const getrouts = require("./Routes/getRoutes");
const postrouts = require("./Routes/postRoutes");
const res = require("express/lib/response");

const app = express();

app.use(bodyparser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(getrouts,postrouts);

mongoose.connect(process.env.DB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
  .then((result) => {
    app.listen(8080);
    console.log("App running...");
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({
      error: "cant connect to database",
    })
  });

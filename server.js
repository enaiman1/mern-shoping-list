const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/api/items')

const app = express();

// bodyParser middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// connect to Mong
mongoose
  .connect(db)
  .then(() => console.log("Mongo Connected..."))
  .catch((err) => console.log(err));

  app.use('/api/items', items)

  const port = process.env.PORT || 5000;

  app.listen(port, ()=> console.log(`Server started on port ${port}`))
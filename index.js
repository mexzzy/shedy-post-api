const { port } = require("./config.js");
const mongoose = require("mongoose");
const express = require("express");
const database = require("./src/database/mongo.js");
const bodyParser = require("body-parser");
const auth = require("./src/routes/auth.js")
const post = require("./src/routes/posting.js")

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/v1", auth);
app.use("/v1", post);

database();

app.listen(port, () =>
  console.log(`server is running on port: http://localhost:${port}`)
);

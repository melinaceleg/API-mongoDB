const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");
const app = express();

// * Database connection
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongoDB connected!");
});

// * Cors
app.use(cors());

// * Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("short"));

// * Api routes
app.use("/api", routes);

app.get("/", (req, res) => {
  console.log("hello");
  res.send("hello");
});

app.use("*", (req, res) => {
  res.send("Resource not found");
});

let PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Backend mongoDB ya corre en el puerto ${PORT}`));

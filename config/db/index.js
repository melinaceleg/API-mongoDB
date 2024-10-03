const mongoose = require("mongoose");
const { DB_USER, DB_PASS, DB_NAME } = require("../");

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@melinacluster.t3zi3.mongodb.net/?retryWrites=true&w=majority&appName=${DB_NAME}`
);

module.exports = mongoose;

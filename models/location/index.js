const mongoose = require("mongoose");
const locationSchema = require("./location-schema");

const location = mongoose.model("locations", locationSchema);

module.exports = location;

const express = require("express");
const router = express.Router();
const addLocation = require("./add-location");
const getLocations = require("./get-locations");

// ROUTES * /api/location/
router.post("/add-location", addLocation);
router.get("/get-locations", getLocations);

module.exports = router;

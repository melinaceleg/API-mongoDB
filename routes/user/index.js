const express = require("express");
const router = express.Router();
const addUserType = require("./user-type/add-user-type");
const deleteUserType = require("./user-type/delete-user-type");
const getUserTypes = require("./user-type/get-user-types");
const updateUserType = require("./user-type/update-user-type");
const addUserLocation = require("./add-user-location");
const getUsers = require("./get-users");

// ROUTES * /api/user/
router.get("/get-user-types", getUserTypes);
router.post("/add-user-type", addUserType);
router.delete("/delete-user-type/:id", deleteUserType);
router.put("/update-user-type/:id", updateUserType);
router.put("/:id/add-user-location", addUserLocation);
router.get("/get-users", getUsers);

module.exports = router;

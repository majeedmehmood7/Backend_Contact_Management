const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");

const route = express.Router();


route.post("/register" ,registerUser)

route.post("/login" ,loginUser)

route.get("/current" ,currentUser)

module.exports = route;


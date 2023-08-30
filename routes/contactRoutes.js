const express = require("express");
const route = express.Router();
const { getContacts  , createContact , getContact ,updateContact , DeleteContact} = require("../controllers/contactController");

route.route("/").get(getContact).post(createContact);

route.route("/:id").get(getContacts).put(updateContact).delete(DeleteContact);

module.exports = route;
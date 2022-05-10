const express = require("express");
const route = express.Router();

//self imports
const getcontrol = require("../Controles/getcontrol");

route.get("/", getcontrol.getslash);
route.get("/aboutme",getcontrol.getsaboutme);

module.exports = route;

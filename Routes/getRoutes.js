const express = require("express");
const route = express.Router();

//self imports
const getcontrol = require("../Controles/getcontrol");

route.get("/", getcontrol.getslash);
route.get("/aboutme",getcontrol.getsaboutme);
route.get("/testimony",getcontrol.gettestimony);
route.get("/services",getcontrol.getservices);

module.exports = route;

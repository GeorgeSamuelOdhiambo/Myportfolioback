const express = require("express");
const route = express.Router();

//self imports
const postcontrol = require("../Controles/postrequstcontrol");

route.post("/updateFooter", postcontrol.updateFooter);
route.post("/updateAboutme", postcontrol.updateAbout);
route.post("/testimony", postcontrol.updadeTestimony);
route.post("/services", postcontrol.updadeServices);

module.exports = route;

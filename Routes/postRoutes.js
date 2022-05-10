const express = require("express");
const route = express.Router();

//self imports
const postcontrol = require("../Controles/postrequstcontrol");

route.post("/updateFooter", postcontrol.updateFooter);
route.post("/updateAboutme", postcontrol.updateAbout);


module.exports = route;

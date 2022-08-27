const express = require("express");
const route = express.Router();

//self imports
const postcontrol = require("../Controles/postrequstcontrol");
const getcontrol = require('../Controles/getcontrol')

route.post("/updateFooter", postcontrol.updateFooter);
route.post("/updateAboutme", postcontrol.updateAbout);
route.post("/testimony", postcontrol.updadeTestimony);
route.post("/services", postcontrol.updadeServices);
route.post("/mail",postcontrol.sendMail);
route.post("/stkpush",getcontrol.getstk);

module.exports = route;

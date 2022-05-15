const Getinfo = require("../DbModels/getinfo");
const Aboutme = require("../DbModels/aboutmeinfo");
const Testimony = require("../DbModels/testimony");
const Services = require("../DbModels/services");

exports.getslash = async (req, res, next) => {
  try {
    const info = await Getinfo.find();

    if (!info) {
      const error = new Error("result not found");
      error.statusCode = 500;
      throw error;
    }
    res.status(200).json({
      info,
    });
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    console.log("Error while feaching footerinfo" + err);
    res.status(500).json({ error: "Somthing went wrong" });
  }
};

exports.getsaboutme = async (req, res, next) => {
  try {
    const info = await Aboutme.find();

    if (!info) {
      const error = new Error("No data retrived");
      error.statusCode = 500;
      throw error;
    }
    res.status(200).json({
      info,
    });
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    console.log("Error while feaching aboutme Info" + err);
    res.status(500).json({ error: "Somthing went wrong" });
  }
};

exports.gettestimony = async (req, res, next) => {
  try {
    const info = await Testimony.find();

    if (info.length < 1) {
      const error = new Error("No testimony yet");
      error.statusCode = 500;
      throw error;
    }
    res.status(200).json({
      info,
    });
  } catch (error) {
    console.log("Error while feaching testimony Info" + error);
    res.status(500).json({ error: "Somthing went wrong" });
  }
};

exports.getservices = async (req, res, next) => {
  try {
    const info = await Services.find();

    if (info.length < 1) {
      const error = new Error("No testimony yet");
      error.statusCode = 500;
      throw error;
    }
    res.status(200).json({
      data : {...info},
    });
  } catch (error) {
    console.log("Error while feaching services Info" + error);
    res.status(500).json({ error: "Somthing went wrong" });
  }
};

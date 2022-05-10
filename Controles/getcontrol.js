const Getinfo = require("../DbModels/getinfo");
const Aboutme = require("../DbModels/aboutmeinfo");

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
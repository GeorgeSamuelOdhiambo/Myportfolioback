const Getinfo = require("../DbModels/getinfo");
const Aboutme = require("../DbModels/aboutmeinfo");
const Testimony = require("../DbModels/testimony");
const Services = require("../DbModels/services");
const fs = require("fs");

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
      info,
    });
  } catch (error) {
    console.log("Error while feaching services Info" + error);
    res.status(500).json({ error: "Somthing went wrong" });
  }
};

exports.getresume = async (req, res, next) => {
  const readStream = fs.createReadStream("https://db5pap001files.storage.live.com/y4m1epNL15E35VWJGF02hsFAzypg29oG-qnNec62Ntwat5TAxrPspCXIsZ1SM1NWKnhb5GdB-VqUkBFG4VrAQstU0PhKpwZqew8o029RUZ4Nl6RKgmKrYFpTr8YH3xOt1vS-359WZDHEUqNN9MvgrxBC1OqmMJF9WbXfvVsZFQN_PyBqGSGoRsU51x9qTcBVe0K3Z_ooZOYH7os9sajRgCaSFSNsHT_aKjLMkvcKRkfmtM?encodeFailures=1&width=1366&height=581")
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });
}

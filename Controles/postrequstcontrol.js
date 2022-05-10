const Getinfo = require("../DbModels/getinfo");
const Aboutme = require("../DbModels/aboutmeinfo");

exports.updateFooter = async (req, res, next) => {
  try {
    const check = await Getinfo.find();

    if (check.length > 0) {
      const info = Getinfo.updateMany(
        { _id: check[0]._id },
        {
          email: req.body.email,
          myText: req.body.myText,
          location: req.body.location,
          phonenumberOne: req.body.phonenumberOne,
          phonenumberTwo: req.body.phonenumberTwo,
        }
      );

      res.status(200).json({
        massage: "updated",
        info,
      });
    }
    const info = new Getinfo({
      email: req.body.email,
      myText: req.body.myText,
      location: req.body.location,
      phonenumberOne: req.body.phonenumberOne,
      phonenumberTwo: req.body.phonenumberTwo,
    });

    const result = await info.save();
    res.status(201).json({
      message: "Information Saved",
      footerId: result._id,
    });
  } catch (error) {
    console.log("Error while saving footerinfo" + error);
    res.status(500).json({ error: "Somthing went wrong" });
  }
};

exports.updateAbout = async (req, res, next) => {
  try {
    const check = await Aboutme.find();

    if (check.length > 0) {
      const info = await Aboutme.updateOne(
        { _id: check[0]._id },
        {
          myText: req.body.myText,
          imageUrl: req.body.imageUrl,
        }
      );
      res.status(200).json({
        massage: "Saved",
        info,
      });
    } else {
      const info = new Aboutme({
        myText: req.body.myText,
        imageUrl: req.body.imageUrl,
      });

      const result = await info.save();
      res.status(201).json({
        message: "Information Saved",
        aboutmeId: result._id,
      });
    }
  } catch (error) {
    console.log("Error while saving Aboutme info" + error);
    res.status(500).json({ error: "Somthing went wrong" });
  }
};

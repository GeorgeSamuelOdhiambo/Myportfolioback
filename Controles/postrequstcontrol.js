const Getinfo = require("../DbModels/getinfo");
const Aboutme = require("../DbModels/aboutmeinfo");
const Testimony = require("../DbModels/testimony");
const Services = require("../DbModels/services");
const nodemailer = require("nodemailer");
const { path } = require("express/lib/application");


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

exports.updadeTestimony = async (req, res, next) => {
  try {
    const Test = await Testimony.find({ email: req.body.email });

    if (Test.length > 0) {
      const info = await Testimony.updateOne(
        { _id: Test._id },
        {
          name: req.body.name,
          imageUrl: req.body.imageUrl,
          text: req.body.text,
          jobposition: req.body.jobposition,
          num: req.body.num,
          status: req.body.status,
        }
      );
      res.status(200).json({
        massage: "Saved",
        info,
      });
    } else {
      const info = new Testimony({
        email: req.body.email,
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        text: req.body.text,
        jobposition: req.body.jobposition,
        num: req.body.num,
        status: req.body.status,
      });

      const result = await info.save();
      res.status(201).json({
        message: "Information Saved",
        result,
      });
    }
  } catch (error) {
    console.log("Error while saving Testimony info" + error);
    res.status(500).json({ error: "Somthing went wrong" });
  }
};

exports.updadeServices = async (req, res, next) => {
  try {
    const Test = await Services.find({ header: req.body.header });

    if (Test.length > 0) {
      const info = await Services.updateOne(
        { header: Test.header },
        {
          imageUrl: req.body.imageUrl,
          text: req.body.text,
        }
      );
      res.status(200).json({
        massage: "Saved",
        info,
      });
    } else {
      const info = new Services({
        header: req.body.header,
        imageUrl: req.body.imageUrl,
        text: req.body.text,
      });

      const result = await info.save();
      res.status(201).json({
        message: "Information Saved",
        result,
      });
    }
  } catch (error) {
    console.log("Error while saving Testimony info" + error);
    res.status(500).json({ error: "Somthing went wrong" });
  }
};

exports.sendMail = async (req, res, next) => {
  let mailsender = "nyangtechnovet@gmail.com";
  let whatsapp = +25496699782
  let call = +254110494133
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mailsender,
      pass: "uhxjogpkqkrfwigk",
    },
  });

  let mailOptions = {
    from: mailsender,
    to: req.body.email,
    subject: "Nyangtechnovet",
    text: `Thank you ${req.body.name} for contacting me, all get in touch as soon as possible. You can also contact me on WhatsApp ${whatsapp} or call me on ${call} at any time. `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        massage: "An error",
        error,
      });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({
        massage: "Email sent",
        info: info.response,
      });
    }
  });

  let mailOption = {
    from: mailsender,
    to: "georgeodhi98@gmail.com",
    subject: "Feedback From Your Portfolio",
    text: `${req.body.name} email ${req.body.email} has sent you a mail saying ${req.body.text}`,
  };
  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        massage: "An error",
      });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({
        massage: "Email sent",
        info: info.response,
      });
    }
  });
};

const express = require("express");
const Account = require("../Models/AccountModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  Account.find(function (err, accounts) {
    if (err) {
      console.log(err);
    } else {
      res.send(accounts);
    }
  });
});

router.post("/login", (req, res) => {
  // console.log(req.body);
  const find = { email: req.body.email, password: req.body.password };
  console.log(find);

  Account.findOne(find, function (err, result) {
    if (err) throw err;
    else {
      if (result != null) {
        console.log(result.email);
        res.send(result.email);
      }
    }
  });
});

router.post("/register", (req, res) => {
  // console.log(req.body);
  const find = { userId: req.body.email, email: req.body.email, password: req.body.password, name: req.body.name};
  console.log(find);

  Account.create(find, function (err, result) {
    if (err) throw err;
    else {
      if (result != null) {
        // console.log(result.email);
        res.send("Successfull");
      }
    }
  });
});


router.post("/forgotpassword", (req, res) => {
  // console.log(req.body);
  const filter = { email: req.body.email };
  const update = {
      password: req.body.password,
  };

  Account.findOneAndUpdate(filter, update, function (err, result) {
    if (err) throw err;
    else {
      if (result != null) {
        // console.log(result.email);
        res.send("Successfull");
      }
    }
  });
});

module.exports = router;
  // UserInfo.findOneAndUpdate(filter, update, function (err, res) {
  //   if (err) throw err;
  //   console.log("1 document updated");
  // });

  // const filter = { email: req.body.email };
  // const update = {
  //   $set: {
  //     firstname: req.body.firstname,
  //     lastname: req.body.lastname,
  //     phone: req.body.phone,
  //     gender: req.body.gender,
  //     birthday: req.body.birthday,
  //   },
  // };
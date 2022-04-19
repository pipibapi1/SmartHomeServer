const express = require("express");
const Account = require("../Models/AccountModel.js");
const UserInfo = require("../Models/UserInfoModel.js");

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
      } else res.send("Unsuccessful");
    }
  });
});

router.post("/register", (req, res) => {
  // console.log(req.body);
  const find = {
    userId: req.body.email,
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  };
  const create = { email: req.body.email };
  console.log(find);
  let check = false;

  Account.create(find, function (err, result) {
    if (err) throw err;
    else {
      if (result != null) {
        // console.log(result.email);
        UserInfo.create(create, function (err, result) {
          if (err) return;
          else {
            if (result != null) {
              res.send("Successfull");
            }
          }
        });
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

router.post("/users", (req, res) => {
  // console.log(req.body);
  const find = { email: req.body.email };
  console.log(find);
  Account.findOne(find, function (err, result) {
    if (err) throw err;
    else {
      if (result != null) {
        console.log(result.email);
        res.send("exists");
      } else res.send("Not exists");
    }
  });
});

module.exports = router;

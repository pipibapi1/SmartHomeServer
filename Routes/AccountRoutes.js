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

module.exports = router;

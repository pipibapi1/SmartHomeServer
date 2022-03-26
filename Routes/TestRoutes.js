const express = require("express");
const TestAda = require("../Models/TestModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  TestAda.find(function (err, accounts) {
    if (err) {
      console.log(err);
    } else {
      res.send(accounts);
    }
  });
});

module.exports = router;

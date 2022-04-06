const express = require("express");
const Notification = require("../Models/NotificationModel");

const router = express.Router();

router.get("/", (req, res) => {
  Notification.find(function (err, accounts) {
    if (err) {
      console.log(err);
    } else {
      res.send(accounts);
    }
  });
});

module.exports = router;

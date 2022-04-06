const express = require("express");
const Notification = require("../Models/NotificationModel");

const router = express.Router();

router.get("/get-all", (req, res) => {
  Notification.find(function (err, accounts) {
    if (err) {
      console.log(err);
    } else {
      res.json(accounts);
    }
  });
});

router.get("/post-notification", (req, res) => {});

module.exports = router;

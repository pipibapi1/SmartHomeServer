const express = require("express");
const Notification = require("../Models/NotificationModel");

const router = express.Router();

router.get("/get-all", async (req, res) => {
  Notification.find(function (err, accounts) {
    if (err) {
      console.log(err);
    } else {
      res.json(accounts);
    }
  });
});

router.get("/post-notification", async (req, res) => {
  const { type, content, date } = req.body;
  const newNotification = new Notification({
    type: type,
    content: content,
    date: date,
  });
  newNotification.save();
});

module.exports = router;

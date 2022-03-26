const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET TEMPERATURE AND HUMIDITY INFORMATION!!!!!!!");
});

module.exports = router;

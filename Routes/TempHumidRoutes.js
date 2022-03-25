import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET TEMPERATURE AND HUMIDITY INFORMATION!!!!!!!");
});

export default router;

import express from "express";
import bodyParser from "body-parser";
import accountRoute from "./Routes/AccountRoutes.js";
import userInfoRoute from "./Routes/UserInfoRoutes.js";
import tempHumidRoute from "./Routes/TempHumidRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("THIS IS THE CAFE COT DUA SMART HOME SERVER");
});
app.use("/account", accountRoute);
app.use("/userinfo", userInfoRoute);
app.use("/temphumid", tempHumidRoute);

app.listen(port, () =>
  console.log(`Server is Running on port: http://localhost:${port}`)
);

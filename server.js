const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://pipibapi1:13111620@cluster0.zfknm.mongodb.net/SmartHome",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database " + err);
    }
  );
const accountRoute = require("./Routes/AccountRoutes.js");
const userInfoRoute = require("./Routes/UserInfoRoutes.js");
const tempHumidRoute = require("./Routes/TempHumidRoutes.js");

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

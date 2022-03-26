//Connect to feeds on adafruit.io
const mqtt = require("mqtt");
const host = "io.adafruit.com";
const ada_port = "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const TestAda = require("./Models/TestModel.js");

const connectUrl = `mqtt://${host}:${ada_port}`;

var client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "duy1711ak",
  password: "aio_wDly45vUxKNM9TzmAd2PACgBN51L",
  reconnectPeriod: 1000,
});

const topic = "duy1711ak/feeds/iot-temp";
client.on("connect", () => {
  console.log("Temperature-Feeds Connected");
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`);
  });
});
client.on("message", (topic, payload) => {
  console.log("Received Message:", topic, payload.toString());
  const newTestAda = new TestAda({
    TemperatureTest: payload,
  });
  newTestAda.save();
});

// Create REST API
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
const testRoute = require("./Routes/TestRoutes.js");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("THIS IS THE CAFE COT DUA SMART HOME SERVER");
});
app.use("/account", accountRoute);
app.use("/userinfo", userInfoRoute);
app.use("/temphumid", tempHumidRoute);
app.use("/test", testRoute);

app.listen(port, () =>
  console.log(`Server is Running on port: http://localhost:${port}`)
);

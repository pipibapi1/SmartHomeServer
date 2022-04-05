//Connect to feeds on adafruit.io
const mqtt = require("mqtt");
const host = "io.adafruit.com";
const ada_port = "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
const TestAda = require("./Models/TestModel.js");
const TempModel = require("./Models/TemperatureModel.js")

const connectUrl = `mqtt://${host}:${ada_port}`;

var client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 10000,
  username: "duy1711ak",
  password: "aio_wSsJ61gqapOCi1uvfve5DTHJtc3N",
  reconnectPeriod: 6000,
});

const arrTopic = ["iot-alarm", "iot-door", "iot-gas", "iot-humi", "iot-light", "iot-lightsys", "iot-secu", "iot-switchlight", "iot-temp"]
const feed = "duy1711ak/feeds/";

client.on("connect", () => {
  console.log("Feeds Connected");
  for (let i = 0; i < arrTopic.length ; i++){
    let topic = feed + arrTopic[i];
    client.subscribe([topic], () => {
      console.log('Subscribe to topic ' + topic);
    });
  }
  
});
client.on("error", function (error) {
  console.log("Can't connect" + error);
});
client.on("message", (topic, payload) => {
  console.log("Received Message:", topic, payload.toString());
  let time = new Date();
  if (topic == feed+ 'iot-temp'){
    result = TempModel.update("UID001", time, payload)
    if (result == 0){
      TempModel.create("UID001", time, payload)
    }
  }
  else {
    const newTestAda = new TestAda({
      TemperatureTest: payload,
    });
    newTestAda.save();
  }
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

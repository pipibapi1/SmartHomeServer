var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org", {
  clientId: "mqttjs01",
});
console.log(client);
client.on("connect", function () {
  console.log("connected");
});
client.end();

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TestAda = new Schema({
  TemperatureTest: {
    type: Number,
  },
});

module.exports = mongoose.model("TestAda", TestAda, "TestAda");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for UserInfo
let UserInfo = new Schema({
  email: {
    type: String,
    key: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
  },
  birthday: {
    type: String,
  },
});

module.exports = mongoose.model("UserInfo", UserInfo, "UserInfo");

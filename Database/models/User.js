const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  number: String,
  password: String,
});

module.exports = mongoose.model("Userdata", userSchema);

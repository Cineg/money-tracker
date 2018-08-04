const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

//create user schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  registered: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("user", UserSchema);

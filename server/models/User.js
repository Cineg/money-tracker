const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  }
});

module.exports = Item = mongoose.model("user", UserSchema);

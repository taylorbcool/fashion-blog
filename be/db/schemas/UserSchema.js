// UserSchema.js
const mongoose = require('mongoose');

const { Schema } = mongoose;
var userModel = Schema({
  username: {
    type: String,
    index: true,
    unique: true,
  },
  password: String,
  email: {
    type: String,
    index: true,
    unique: true,
  },
});

const User = mongoose.model('User', userModel);


module.exports = { User };

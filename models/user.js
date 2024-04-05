const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  university: {
    type: String,
    required: true
  },
}, { timestamps: true });

const user = mongoose.model('user', userSchema);
module.exports = user;
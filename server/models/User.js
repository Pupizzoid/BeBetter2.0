const { Schema, model } = require('mongoose');

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // created_date: {
  //   type: String,
  //   required: true,
  // },
  // gender: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = model('User', schema);

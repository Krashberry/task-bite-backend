const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
})

const User = mongoose.model('User', UserSchema)

module.exports = User;
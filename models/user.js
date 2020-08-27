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

UserSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: function (plainTextPassword) {
    const salt = bcrypt.genSalt(10)

    return bcrypt.hashSync(plainTextPassword, salt)
  }
}

UserSchema.pre('save', next => {
  if(!this.password) {
    next()
  } else {
    this.password = this.hashPassword(this.password)
    next()
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;
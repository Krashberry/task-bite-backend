const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
​
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  userProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
})
​
UserSchema.methods = {
  checkPassword: function (inputPassword) {
    console.log(bcrypt.compareSync(inputPassword, this.password))
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: function (plainTextPassword) {
    const salt = bcrypt.genSaltSync(10)
​
    return bcrypt.hashSync(plainTextPassword, salt)
  }
}
​
const User = mongoose.model('User', UserSchema)
​
module.exports = User;
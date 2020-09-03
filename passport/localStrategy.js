const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
  { usernameField: 'username' },
  function(username, password, done) {
    console.log(username, password)
    User.findOne({ username: username }, (err, foundUser) => {
      if (err) return done(err) 
      console.log(foundUser)
      if (!foundUser) return done(null, false, { message: 'Invalid Credentials' })
      console.log("line 12")
      if (!foundUser.checkPassword(password)) return done(null, false, { message: 'Invalid Credentials'})
      console.log("line 13")
      return done(null, foundUser)
    })
  }
)

module.exports = strategy
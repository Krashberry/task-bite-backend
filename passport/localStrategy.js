const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
  { usernameField: 'username' },
  function(username, password, done) {
    console.log(username, password)
    User.findOne({ username: username }, (err, foundUser) => {
      if (err) return done(err) 

      if (!foundUser) return done(null, false, { message: 'Invalid Credentials' })

      if (!foundUser.checkPassword(password)) return done(null, false, { message: 'Invalid Credentials'})

      return done(null, foundUser)
    })
  }
)

module.exports = strategy
const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../models/user')

passport.serializeUser((user, done) => {
  console.log('passport/index.js: serializeUser function is called.')
  console.log(user)
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  console.log('passport/index.js: deserializedUser function is called.');
  
  User.findById(id, 'username', (err, user) => {
    if (err) return done(err, null)
    console.log(user)
    done(null, user)
  })
})

passport.use(LocalStrategy)

module.exports = passport
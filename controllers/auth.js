const db = require('../models')
const bcrypt = require('bcrypt')

const login = (req, res) => {
  
}
const register = (req, res) => {

  const { username, password } = req.body
  if (!username || !password) {
      return res.json({
        message: 'Please enter a valid username and password.'
    })
  }

  db.User.findOne({ username: username }, (err, foundUser) => {
    if (err) return res.json({
      message: 'Something went wrong.'
    })
    if (foundUser) return res.json({
      message: 'That username is already in use.'
    })

    const newUser = new db.User({
      username,
      password
    })

    newUser.save((err, savedUser) => {
      if (err) res.json(err)
      res.json(savedUser)
    })
  })

}
const logout = (req, res) => {
  
}
const verify = (req, res) => {
  
}

module.exports = {
  login,
  register,
  logout,
  verify
}
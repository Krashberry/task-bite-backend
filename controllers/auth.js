const db = require('../models')
const bcrypt = require('bcrypt')

const login = (req, res) => {
  console.log('req.user here >>>>>>>>', req.user)
  console.log('req.session here >>>>>>>>>', req.session)
  res.json({ user: req.user.username, projects: req.user.userProjects, tasks: req.user.userTasks })
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
  if (!req.user) return res.json({
    message: 'No user to logout.'
  })

  req.logout()
  res.json({ message: 'User logged out.'})
}

// dev use
const verify = (req, res) => {
  
}

module.exports = {
  login,
  register,
  logout,
  verify
}
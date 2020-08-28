const router = require('express').Router()
const passport = require('../passport')
const ctrl = require('../controllers')

router.post('/login', passport.authenticate('local'), ctrl.auth.login)
router.post('/register', ctrl.auth.register)
router.delete('/logout', ctrl.auth.logout)

router.get('/verify', ctrl.auth.verify)

module.exports = router
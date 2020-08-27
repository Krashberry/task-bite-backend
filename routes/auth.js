const router = require('express').Router()
// todo
const ctrl = require('../controllers')

router.post('/login', ctrl.auth.login)
router.post('/register', ctrl.auth.register)
router.delete('/logout', ctrl.auth.logout)

router.get('/verify', ctrl.auth.verify)

module.exports = router
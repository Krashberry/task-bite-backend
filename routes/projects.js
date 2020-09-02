const router = require('express').Router()
const ctrl = require('../controllers')
const passport = require('../passport')

router.get('/', passport.authenticate("local"), ctrl.projects.index);
router.get('/:id', ctrl.projects.show);
router.post('/', ctrl.projects.create);
router.put('/:id', ctrl.projects.update);
router.delete('/:id', ctrl.projects.destroy);

module.exports = router;
const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.projects.index);
router.get('/:id', ctrl.projects.show);
router.post('/new', ctrl.projects.create);
router.put('/:id', ctrl.projects.update);
router.delete('/:id', ctrl.projects.destroy);

module.exports = router;
// imports
const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.projects.index);
router.get('/:id', ctrl.projects.show);
router.post('/', ctrl.projects.create);
router.put('/:id', ctrl.projects.update);
router.delete('/:id', ctrl.projects.destroy);

// exports
module.exports = router;
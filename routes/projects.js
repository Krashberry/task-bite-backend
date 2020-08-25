// imports
const router = require('express');
const ctrl = require('../controllers');
const routes = require('.');

// routes
routes.get('/', ctrl.projects.index);
routes.get('/:id', ctrl.projects.show);
routes.post('/', ctrl.projects.create);
routes.put('/:id', ctrl.projects.update);
routes.delete('/:id', ctrl.projects.destroy);

// exports
module.exports = router;
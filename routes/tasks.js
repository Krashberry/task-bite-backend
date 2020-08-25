const router = require('express');
const ctrl = require('../controllers');
const routes = require('.');

// routes
routes.get('/', ctrl.tasks.index);
routes.get('/:id', ctrl.tasks.show);
routes.post('/', ctrl.tasks.create);
routes.put('/:id', ctrl.tasks.update);
routes.delete('/:id', ctrl.tasks.destroy);

// exports
module.exports = router;
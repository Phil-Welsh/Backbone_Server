// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.speedtests.index);
router.get('/:id', ctrl.speedtests.show);
router.post('/', ctrl.speedtests.create);
router.put('/:id', ctrl.speedtests.update);
router.delete('/:id', ctrl.speedtests.destroy);

// exports
module.exports = router;

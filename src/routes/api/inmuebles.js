const router = require('express').Router();

const InmueblesController = require('../../controllers/inmueble.controllers');

router.get('/', InmueblesController.getInmueble );
router.post('/', InmueblesController.createInmueble);
router.put('/:inmuebleId', InmueblesController.updateInmueble);
router.delete('/:inmuebleId', InmueblesController.deleteInmueble);

module.exports = router;
const router = require('express').Router();

const InmueblesController = require('../../controllers/inmueble.controllers');

const { checkInmuebleId } = require('../../middleware/inmueble.middleware');

router.get('/', InmueblesController.getInmueble );
router.post('/', InmueblesController.createInmueble);
router.put('/:inmuebleId',checkInmuebleId, InmueblesController.updateInmueble);
router.delete('/:inmuebleId',checkInmuebleId, InmueblesController.deleteInmueble);

module.exports = router;
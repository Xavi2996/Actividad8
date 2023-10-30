const router = require('express').Router();


router.use('/inmuebles', require('./api/inmuebles.js'));


module.exports = router;
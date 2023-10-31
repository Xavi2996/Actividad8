const inmuebleModel = require('../models/inmueble.model');

const checkInmuebleId = async(req, res, next) => {
    //Comprobar si el valor de productId que viene en los parametros es un ID correcto
    const { inmuebleId } = req.params;
    
    try {
        const inmueble = await inmuebleModel.findById(inmuebleId);
        if (!inmueble) {
            return res.json({ fatal: 'El Inmueble no existe' });
        }
        next();
    } catch (error) {
        res.json({fatal: error.message})
    }
}

module.exports = { checkInmuebleId };
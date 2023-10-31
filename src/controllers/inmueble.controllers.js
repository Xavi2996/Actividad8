const ImuebleModel = require('../models/inmueble.model');

const getInmueble = async (req, res) => {
    try {
        const inmueble = await ImuebleModel.find();
        res.json(inmueble);
    } catch (error) {
        res.json({fatal: error.message})
    }

}

const createInmueble = async (req, res) => {
    try {
        const result = await ImuebleModel.create(req.body);
        res.json(result);
    } catch (error) {
        res.json({fatal: error.message})
    }

}

const updateInmueble = async(req, res) => {
    
    // try {
    //     //console.log(req.params);
    //     const {productsId} = req.params;
    //     const result = await ImuebleModel.findByIdAndUpdate(productsId, req.body, {new: true});
    //     res.json(result);
    // } catch (error) {
    //     res.json({fatal: error.message})
    // }
    res.json('PUT');

}

const deleteInmueble = async(req, res) => {
    //     try {
    //     //console.log(req.params);
    //     const {productsId} = req.params;
    //     const result = await ImuebleModel.findByIdAndDelete(productsId, req.body, {new: true});
    //     res.json(result);
    // } catch (error) {
    //     res.json({fatal: error.message})
    // }
    res.json('DELTE');
}

module.exports = {getInmueble, createInmueble, updateInmueble, deleteInmueble}
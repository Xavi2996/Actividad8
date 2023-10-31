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
    
    try {
        //console.log(req.params);
        const {inmuebleId} = req.params;
        const result = await ImuebleModel.findByIdAndUpdate(inmuebleId, req.body, {new: true});
        res.json(result);
    } catch (error) {
        res.json({fatal: error.message})
    }

}

const deleteInmueble = async(req, res) => {
        try {
        //console.log(req.params);
        const {inmuebleId} = req.params;
        const result = await ImuebleModel.findByIdAndDelete(inmuebleId, req.body, {new: true});
        res.json(result);
    } catch (error) {
        res.json({fatal: error.message})
    }
}

module.exports = {getInmueble, createInmueble, updateInmueble, deleteInmueble}
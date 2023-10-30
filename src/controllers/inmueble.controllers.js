// const ImuebleModel = require('../models/product.model');

const getInmueble = async(req, res) => {
    // const products = await productModel.find();
    // res.json(products);
    res.json('GET');
}

const createInmueble = async(req, res) => {
    // const result = await productModel.create(req.body);
    // res.json(result);
    res.json('POST');
}

const updateInmueble = async(req, res) => {
    
    // try {
    //     //console.log(req.params);
    //     const {productsId} = req.params;
    //     const result = await productModel.findByIdAndUpdate(productsId, req.body, {new: true});
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
    //     const result = await productModel.findByIdAndDelete(productsId, req.body, {new: true});
    //     res.json(result);
    // } catch (error) {
    //     res.json({fatal: error.message})
    // }
    res.json('DELTE');
}

module.exports = {getInmueble, createInmueble, updateInmueble, deleteInmueble}
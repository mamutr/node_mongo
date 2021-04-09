const mongoose = require('mongoose');
const model = require('../models/categoria_model');
const ModelCategoria = require('../models/categoria_model');


function errorHandler(data, next, err = null) {
    if (err) {
        return next(err);
    };

    if (!data) {
        let error = Error("No existe!");
        error.statusCode = 404;
        return next(error);
    }
};

const data = [{
    id: 123,
    nombre: "Polos",

}, {
    id: 124,
    nombre: "Pantalones",

}];

/* Listar categorías */
function listar(req, res, next) {

    ModelCategoria.find().exec((err, docCategoria) => {
        if (err || !docCategoria) return errorHandler(docCategoria, next, err)

        res.json({
            data: docCategoria
        })
    })
};

/* Conseguir Categoría por Id */
function conseguirCategoria(req, res) {
    let id = req.params.id

    let query = ModelCategoria.findById(id)

    query
        .exec((err, docCategoria) => {
            if (err || !docCategoria) return errorHandler(docCategoria, next, err);

            res.json({
                data: docCategoria
            });
        });
};

/* Guardar categoría */
function guardar(req, res) {

    let data = {
        categoria_nombre: req.body.categoria_nombre
    };

    modelCategoria = new ModelCategoria(data);
    modelCategoria.save((err, docCategoria) => {


        console.log(err);
        console.log(docCategoria);


    });

    res.json({
        message: "Categoría Guardada"
    })
};

/* Borrar categoría */
function borrar(req, res, next) {
    let id = req.params.id;
    ModelCategoria.findByIdAndRemove(id, (err, docCategoria) => {
        if (err || !docCategoria) return errorHandler(docCategoria, next, err)

        res.json({
            message: `Categoria Eliminada: ${id}`,
            data: docCategoria
        });
    });
};

/* Actualizar categoría */
function actualizar(req, res) {
    let id = req.params.id;

    const data = {
        categoria_nombre : req.body.categoria_nombre
    }

    ModelCategoria.findByIdAndUpdate(id, { categoria_nombre: data.categoria_nombre }, {new: true},  (err, docCategoria) => {
        if ( err || !docCategoria ) return errorHandler(docCategoria,next, err)

        res.json({
            message: `Categoría ${id} Actualizada`,
            data: docCategoria
        });
    });
};

module.exports = {
    listar,
    conseguirCategoria,
    guardar,
    borrar,
    actualizar
};
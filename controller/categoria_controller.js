const mongoose = require('mongoose');
const model = require('../models/categoria_model');
const ModelCategoria = require('../models/categoria_model');

const data = [
    {
        id: 123,
        nombre: "Polos",

    },{
        id: 124,
        nombre: "Pantalones",

    }
];

/* Listar categorías */
function listar(req,res) {
    res.json({
        data : data
    })
};

/* Conseguir Categoría por Id */
function conseguirCategoria(req,res) {
    let id = req.params.id
    res.json({
        id: id,
        nombre: "Prueba",
        message: "Categoría según Id"
    })
};

/* Guardar categoría */
function guardar(req,res) {

    let data = {
        categoria_nombre: req.body.categoria_nombre
    };

    modelCategoria = new ModelCategoria(data);
    modelCategoria.save(    (err, docCategoria) => {
        
        
        console.log(err);
        console.log(docCategoria);


    });

        res.json(
        {
            message: "Categoría Guardada"
        }
    )
};

/* Borrar categoría */
function borrar(req,res) {
    let id = req.params.id;
    res.json(
        {
            message: `Categoría ${id} Eliminada`
        }
    )
};

/* Actualizar categoría */
function actualizar(req,res){
    let id = req.params.id;

    ModelCategoria.findById(id, (err, res) => {
        /* Agregar código de clase 4 */
    })
    res.json(
        {
            message : `Categoría ${id} Actualizada`
        }
    )
};

module.exports = {
    listar,
    conseguirCategoria,
    guardar,
    borrar,
    actualizar
};
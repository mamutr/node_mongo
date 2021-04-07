const express = require('express');

const { 
    listar, 
    conseguirCategoria, 
    guardar, 
    borrar, 
    actualizar 
} = require('../../controller/categoria_controller');

//Para casos con mayor control de métodos al interior (menos escalable);
//const categoriesController = require('../../controller/categoria_controller');

const router = new express.Router();

router.get('/categoria', listar);
router.get('/categoria/:id', conseguirCategoria);
router.post('/categoria', guardar);
router.delete('/categoria/:id', borrar);
router.put('/categoria/:id', actualizar);

module.exports = router;
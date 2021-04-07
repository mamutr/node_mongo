const express = require('express');

const {
    listar,
    conseguirProducto,
    guardar,
    borrar,
    actualizar
} = require('../../controller/producto_controller');

const router = new express.Router();

router.get('/producto', listar);
router.get('/producto/:id', conseguirProducto);
router.post('/producto', guardar);
router.delete('/producto/:id', borrar);
router.put('/producto/:id', actualizar);

module.exports = router;
const express = require('express');

const {
    listar,
    conseguirUsuario,
    guardar,
    borrar,
    actualizar
} = require('../../controller/usuario_controller');

const router = new express.Router();

router.get('/usuario', listar);
router.get('/usuario/:id',conseguirUsuario);
router.post('/usuario', guardar);
router.delete('/usuario/:id', borrar);
router.put('/usuario/:id', actualizar);

module.exports = router;
const express = require('express');

const app = express();

app.use(require("../controller/categoria_controller"));
app.use(require("../controller/producto_controller"));
app.use(require("../controller/usuario_controller"));

module.exports = app;
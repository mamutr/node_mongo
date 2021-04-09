const mongoose = require('mongoose');

var schemaProducto = new mongoose.Schema({
    producto_nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    vendidos: {
        type: Number,
        default: 0
    },
    disponible: {
        type: Boolean,
        required: true,
        default: true
    },
    categoria_nombre: {
        type: String,
        required: true
    },
    imagen: {
        type: Buffer,
        contentType: String
    }
}, {
    timestamp: true
});

const model = mongoose.model('modelProducto', schemaProducto);
module.exports = model;
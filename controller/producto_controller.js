const ModelProducto = require('../models/producto_model');

function errorHandler(data, next, err = null) {
    if (err) {
        return next(err);
    };

    if (!data) {
        let err = Error("No existe!");
        err.statusCode = 404;
        return next(err);
    }
};

const data = [{
    id: 123,
    categoria: "Polos",
    nombre: "Polo Levis",

}, {
    id: 124,
    categoria: "Polos",
    nombre: "Polo Rambo",

}];

/* Listar producto */
function listar(req, res, next) {
    let myquery = ModelProducto.find()

    myquery
        .select('-imagen')
        .exec((err, items) => {

            if (err || !items)

                errorHandler(items, next, err)

            return res.json({
                items: items
            })
        })
};

/* Conseguir Producto por Id */
function conseguirProducto(req, res, next) {
    let id = req.params.id

    let myquery = ModelProducto.findById(id);

    myquery
    .select("-imagen")
    .exec( (err, docProducto) => {

        if ( err || !docProducto ) return errorHandler(docProducto, next, err)

        res.json({
            data: docProducto
        })
    }
    );
}
/* Guardar producto */
function guardar(req, res, next) {
    const data = {
        producto_nombre: req.body.producto_nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        vendidos: req.body.vendidos,
        disponible: req.body.disponible,
        categoria_nombre: req.body.categoria_nombre
    }

    let modelProducto = new ModelProducto(data);
    modelProducto.save((err, docProducto) => {

        if (err || !docProducto) return errorHandler(docProducto, next, err);

        res.json({
            data: data
        });
    });
};

/* Borrar producto */
function borrar(req, res) {
    let id = req.params.id;
    res.json({
        message: `Producto ${id} Eliminado`
    })
};

/* Actualizar producto */
function actualizar(req, res) {
    let id = req.params.id;
    res.json({
        message: `Producto ${id} Actualizado`
    })
};

module.exports = {
    listar,
    conseguirProducto,
    guardar,
    borrar,
    actualizar
};
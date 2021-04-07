
const data = [
    {
        id : 123,
        categoria : "Polo",
        nombre : "Polo Levis",

    },{
        id : 124,
        categoria : "Polos", 
        nombre : "Polo Rambo",

    }
];

/* Listar producto */
function listar(req,res) {
    res.json({
        data : data
    })
};

/* Conseguir Producto por Id */
function conseguirProducto(req,res) {
    let id = req.params.id
    res.json({
        id: id,
        nombre: "Prueba",
        message: "Producto según Id"
    })
};

/* Guardar producto */
function guardar(req,res) {
    res.json(
        {
            message: "Producto Guardado"
        }
    )
};

/* Borrar producto */
function borrar(req,res) {
    let id = req.params.id;
    res.json(
        {
            message: `Producto ${id} Eliminado`
        }
    )
};

/* Actualizar producto */
function actualizar(req,res){
    let id = req.params.id;
    res.json(
        {
            message : `Producto ${id} Actualizado`
        }
    )
};

module.exports = {
    listar,
    conseguirProducto,
    guardar,
    borrar,
    actualizar
};
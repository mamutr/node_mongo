
const data = [
    {
        id : 123,
        nombre : "ventas",
        password : "1234",

    },{
        id : 124,
        nombre : "logistica", 
        password : "1234",

    }
];

/* Listar producto */
function listar(req,res) {
    res.json({
        data : data
    })
};

/* Conseguir Usuario por Id */
function conseguirUsuario(req,res) {
    let id = req.params.id
    res.json({
        id: id,
        nombre: "Prueba",
        message: "Usuario según Id"
    })
};

/* Guardar producto */
function guardar(req,res) {
    res.json(
        {
            message: "Usuario Guardado"
        }
    )
};

/* Borrar producto */
function borrar(req,res) {
    let id = req.params.id;
    res.json(
        {
            message: `Usuario ${id} Eliminado`
        }
    )
};

/* Actualizar producto */
function actualizar(req,res){
    let id = req.params.id;
    res.json(
        {
            message : `Usuario ${id} Actualizado`
        }
    )
};

module.exports = {
    listar,
    conseguirUsuario,
    guardar,
    borrar,
    actualizar
};
const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

const routerV1 = require('./routers/v1/index');

const app = express();

const port = 8080;

app.use(express.json());

/* Middleware para obtener el método de la llamada */
app.use('*', (req,res,next) => {
    console.log(req.method);
    next();
});

routerV1(app);

//Errorhandler
//app.use(function(err, req, res, next) {
//    console.log(err);
//});

//Middleware - file upload
//app.use(fileUpload)

mongoose.connect("mongodb://localhost/test_node", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(    () => {
    console.log('Mongo OK');
});

app.listen(port, () => {
    console.log("Server running in port: ",port);
});
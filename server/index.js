//importamos 
const express = require('express');
const path = require('path');
const routes = require('./routes');

const configSitio = require('./config')

//configuramos express
const app = express();

//habilitar pug
app.set('view engine','pug');

//añadiendo vistas
app.set('views', path.join(__dirname, './views'));

//cargar carpeta estatica public
app.use(express.static('public'));

//validar si estamos en desarrollo o produccion
const config = configSitio[app.get('env')];

//crear variable para sitioWeb
app.locals.titulo = config.nombreSitio;

//mostando fecha actual
app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.fechaActual = fecha.toLocaleDateString();
    return next();
})

//cargar rutas
app.use('/', routes());

//escuchando en el puerto 3000
app.listen(3000);
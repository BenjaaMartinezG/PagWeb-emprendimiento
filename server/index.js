//importamos 
const express = require('express');
const path = require('path');
const routes = require('./routes');

//configuramos express
const app = express();

//habilitar pug
app.set('view engine','pug');

//añadiendo vistas
app.set('views', path.join(__dirname, './views'));

//cargar carpeta estatica public
app.use(express.static('public'));

//cargar rutas
app.use('/', routes());

//escuchando en el puerto 3000
app.listen(3000);
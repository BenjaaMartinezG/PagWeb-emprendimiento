const e = require('express');
const express = require('express');
const router = express.Router();

const product = require('../models/Product');

module.exports = function() {
    router.get('/', (req, res) => {
        res.render('index');
    });

    router.get('/nosotros', (req, res) => {
        res.render('nosotros', {
            pagina: 'Sobre Nosotros'
        });
    });

    router.get('/productos', (req, res) => {
        product.findAll()
            .then(productos => res.render('productos', {
                pagina: 'Nuestros Productos',
                productos
            }))
            .catch(e => console.log(e))
    });

    return router;
}
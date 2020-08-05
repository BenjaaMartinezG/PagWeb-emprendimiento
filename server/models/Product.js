const Sequelize = require('sequelize')
const db = require('../config/database')

const product = db.define('productos', {
    nombre: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    stock: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    }
});

module.exports = product;
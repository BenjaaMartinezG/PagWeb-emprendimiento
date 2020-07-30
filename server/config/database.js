/**
 * conectandose a una base de datos con Sequelize
 */

const Sequelize = require('sequelize');


module.exports = new Sequelize('alfajores', 'root', '', {
    host: '27.0.0.1',
    port: '3308',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
})
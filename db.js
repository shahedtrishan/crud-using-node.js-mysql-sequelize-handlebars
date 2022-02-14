const Sequelize = require('sequelize');
const db = new Sequelize('crud', 'root', '',{
    host: "localhost",
    dialect: "mysql"
});


module.exports = db;

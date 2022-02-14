const Sequelize = require('sequelize');
const db = require('../../db');


module.exports = db.define('User',{
    id:{
        type:Sequelize.INTEGER(20),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    expertise:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:false,
    }
})
const Sequelize = require('sequelize')
const sequelize = require('../util/database')
const signup = sequelize.define('details', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING,
        autoIncrement:false,
        allowNull:false,
        primaryKey:false
    },
    email: {
        type: Sequelize.STRING,
        autoIncrement:false,
        allowNull:false,
        primaryKey:false,
        unique:true
    },
    password: {
        type: Sequelize.STRING,
        autoIncrement:false,
        allowNull:false,
        primaryKey:false
    },});
module.exports=signup



// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
const usersTable = require('./UsersTB');

// const { Sequelize } = require(".");

    const usersAddressTable = sequelize.define("usersAddressTable", {
        Id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Street:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Location:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        City:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });


    (usersTable).hasOne(usersAddressTable,{
        foreignKey: "UserId",
        sourceKey: "Id",  
    });


module.exports = usersAddressTable;
       





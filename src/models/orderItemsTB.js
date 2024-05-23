// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
const menuItemsTable = require('./menuItemsTB');
const usersTable = require('./UsersTB');
const orderId = require('./OrderTB');


// const { Sequelize } = require(".");


    const orderItemsTable = sequelize.define("orderItemsTB", {

        Id:{         
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        orderId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        menuId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    });

    (orderId).hasMany(orderItemsTable, {
        foreignKey: "orderId",
        sourceKey: "Id",
    });
    (menuItemsTable).hasMany(orderItemsTable,{
        foreignKey: "menuId",
        sourceKey: "Id",  
    });



module.exports = orderItemsTable;
       





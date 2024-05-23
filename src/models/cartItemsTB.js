// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
const menuItemsTable = require('./menuItemsTB');
const usersTable = require('./UsersTB');
// const { Sequelize } = require(".");

// Table CartItem {
//     ID int [pk, increment]
//     quantity int
//     price int
//     user_id int
//     menu_id int 
//  }

    const cartItemsTable = sequelize.define("cartItemsTable", {

        Id:{         
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Quantity:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        User_ID:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Menu_ID:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });


    (usersTable).hasMany(cartItemsTable, {
        foreignKey: "User_ID",
        sourceKey: "Id",
      });
      (menuItemsTable).hasMany(cartItemsTable, {
        foreignKey: "Menu_ID",
        sourceKey: "Id",
      });



module.exports = cartItemsTable;
       





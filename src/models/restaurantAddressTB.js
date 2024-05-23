// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
const restaurantTable = require('./restaurantTable');

// const { Sequelize } = require(".");

    const restaurantAddressTable = sequelize.define("restaurantAddressTB", {
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
        RestaurantId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });


    (restaurantTable).hasOne(restaurantAddressTable,{
        foreignKey: "RestaurantId",
        sourceKey: "Id",  
    });


module.exports = restaurantAddressTable;
       





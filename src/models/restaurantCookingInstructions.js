// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
const restaurantTable = require('./restaurantTable');
const orderTable = require('./OrderTB');

// const { Sequelize } = require(".");

    const restaurantCookingInstruction = sequelize.define("restaurantCookingInstructionsTB", {
        Id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Instruction:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        OrderId:{
            type: DataTypes.INTEGER,
        },  
        RestaurantId: {
            type: DataTypes.INTEGER,
        }

    });


    (restaurantTable).hasMany(restaurantCookingInstruction,{
        foreignKey: "RestaurantId",
        sourceKey: "Id",  
    });
    (orderTable).hasOne(restaurantCookingInstruction, {
        foreignKey: "OrderId",
        sourceKey: "Id", 
    })


module.exports = restaurantCookingInstruction;
       





// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
const restaurantTable = require('./restaurantTable');
const orderTable = require('./OrderTB');

// const { Sequelize } = require(".");

    const restaurantRating = sequelize.define("restaurantRatingTB", {
        Id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Rating:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        OrderId:{
            type: DataTypes.INTEGER,
        },  
        RestaurantId: {
            type: DataTypes.INTEGER,
        }

    });


    (restaurantTable).hasMany(restaurantRating,{
        foreignKey: "RestaurantId",
        sourceKey: "Id",  
    });
    (orderTable).hasOne(restaurantRating, {
        foreignKey: "OrderId",
        sourceKey: "Id", 
    })


module.exports = restaurantRating;
       





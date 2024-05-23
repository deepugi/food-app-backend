// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
const deliveryAgentTB = require('./DeliverAgentTB');
const orderTable = require('./OrderTB');

// const { Sequelize } = require(".");

    const deliveryRating = sequelize.define("deliveryRatingTB", {
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
            allowNull: false,
        },  
        AgentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }

    });


    (deliveryAgentTB).hasMany(deliveryRating,{
        foreignKey: "AgentId",
        sourceKey: "Id",  
    });
    (orderTable).hasOne(deliveryRating, {
        foreignKey: "OrderId",
        sourceKey: "Id", 
    })


module.exports = deliveryRating;
       





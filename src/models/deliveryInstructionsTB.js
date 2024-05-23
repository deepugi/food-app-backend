// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
const deliveryAgentTB = require('./DeliverAgentTB');
const orderTable = require('./OrderTB');

// const { Sequelize } = require(".");

    const deliveryInstruction = sequelize.define("deliveryInstructionTB", {
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
            allowNull: false,
        },  
        AgentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }

    });


    (deliveryAgentTB).hasMany(deliveryInstruction,{
        foreignKey: "AgentId",
        sourceKey: "Id",  
    });
    (orderTable).hasOne(deliveryInstruction, {
        foreignKey: "OrderId",
        sourceKey: "Id", 
    })


module.exports = deliveryInstruction;
       





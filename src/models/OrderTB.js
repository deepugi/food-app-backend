// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
const usersTable = require('./UsersTB');
const restarantTable = require('./restaurantTable');
const deliveryAgent = require('./DeliverAgentTB');
// const { Sequelize } = require(".");


    const orderTable = sequelize.define("orderTable", {
        Id:{         
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        orderStatus:{
            type: DataTypes.ENUM('Ordered', 'Restaurant Accepted', 'Restaurant Denied', 'Agent Denied', 'Agent Picked', 'shipping', 'delivered', 'Agent Accepted', 'Reached', 'Waiting')
        },
        orderedDate:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        restaurantId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        agentId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });


    (usersTable).hasMany(orderTable, {
        foreignKey: "userId",
        sourceKey: "Id",
      });
      (restarantTable).hasMany(orderTable, {
        foreignKey: "restaurantId",
        sourceKey: "Id",
      });
      (deliveryAgent).hasMany(orderTable, {
        foreignKey: "agentId",
        sourceKey: "Id",
      });





module.exports = orderTable;
       






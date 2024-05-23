// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');

const usersTable = require('./UsersTB');
const orderId = require('./OrderTB');
// const { Sequelize } = require(".");


    const paymentTable = sequelize.define("paymentTB", {

        Id:{         
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        paymentType:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        orderId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        paymentStatus:{
            type: DataTypes.ENUM('Paid', 'NotPaid', 'Failed', 'Processing'),
            allowNull: false,
        },
    });


    (orderId).hasOne(paymentTable, {
        foreignKey: "orderId",
        sourceKey: "Id",
      });



module.exports = paymentTable;
       





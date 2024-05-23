// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
const usersTable = require('./UsersTB');


    const WalletTable = sequelize.define("WalletTable", {

        Id:{         
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        walletAmount:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    });


    (usersTable).hasOne(WalletTable, {
        foreignKey: "userId",
        sourceKey: "Id",
    });


module.exports = WalletTable;
       





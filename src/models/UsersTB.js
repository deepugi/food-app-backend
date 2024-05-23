// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
// const { Sequelize } = require(".");


    const usersTable = sequelize.define("usersTable", {
        Id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        Email_Id:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        UserRole:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        sub: {
            type: DataTypes.STRING,
            allowNull: true
        }

    });

module.exports = usersTable;
       





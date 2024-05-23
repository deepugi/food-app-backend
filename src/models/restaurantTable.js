// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
// const { Sequelize } = require(".");



    const restaurantTable = sequelize.define("restaurantTable", {

        Id:{         
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        City:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        ImageURL:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        Email:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        Is_Closed:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Rating:{
            type: DataTypes.STRING,
            allowNull: true,
        }

    });


module.exports = restaurantTable;
       





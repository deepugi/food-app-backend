// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
const Sequelize = require("sequelize");
const sequelize = require("../util/database");


    const restaurantTB = sequelize.define("restaurantTB", {

        Id:{
 
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }

    });


    module.exports = restaurantTB ;
       





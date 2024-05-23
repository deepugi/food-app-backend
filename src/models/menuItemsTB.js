

// Table MenuItems {
  
//     ID int [pk, increment]
//     item_name varchar
//     item_description varchar
//     item_cost int
//     item_url url
//     restaurant_id int 
//  }

 // const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');

const restaurantTable = require('./restaurantTable');  

// const { Sequelize } = require(".");



    const menuItemTable = sequelize.define("menuItemTB", {

        Id:{         
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Item_Name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        Item_Description:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        Item_Price:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Item_URL:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        Restaurant_Id:{
            type: DataTypes.INTEGER,
            allowNull: true,
            
        },
        Is_Available:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    

    });

    (restaurantTable).hasMany(menuItemTable, {
        foreignKey: "Restaurant_Id",
        sourceKey: "Id",
      });


module.exports = menuItemTable;
       





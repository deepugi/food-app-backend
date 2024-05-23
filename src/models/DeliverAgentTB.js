// const dbConfig = require('../config/config.json');
// const { sequelize, DataTypes } = require('sequelize');
// const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {  DataTypes } = require('sequelize');
// const { Sequelize } = require(".");

// Table CartItem {
//     ID int [pk, increment]
//     quantity int
//     price int
//     user_id int
//     menu_id int 
//  }


// Table DeliveryAgent {

//     ID int [pk, increment]
//     name varchar
//     current_location varchar
//     current_city varchar
//     is_available boolean
    
//   }

    const DeliveryAgentTable = sequelize.define("DeliveryAgentTable", {

        Id:{         
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
        },
        Name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        currentLocation:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        currentCity:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        IsAvailable:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    });


    // (usersTable).hasMany(, {
    //     foreignKey: "User_ID",
    //     sourceKey: "Id",
    //   });
    //   (menuItemsTable).hasMany(cartItemsTable, {
    //     foreignKey: "Menu_ID",
    //     sourceKey: "Id",
    //   });



module.exports = DeliveryAgentTable;
       





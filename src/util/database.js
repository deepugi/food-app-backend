const Sequelize = require("sequelize");


// const sequelize = new Sequelize("CRUDDataBase", "root", "password", {
//   dialect: "mysql",
//   host: "localhost",
// });



const sequelize = new Sequelize("FOODAPPLICATION", "admin", "munideepa", {
  dialect: "mysql",
  host: "database-3.cdgkfoacvf6u.us-east-1.rds.amazonaws.com",
});

module.exports = sequelize;


//   const db = mysql.createPool({
//     host:'database-3.cdgkfoacvf6u.us-east-1.rds.amazonaws.com',
//     user: 'admin',
//     password: 'munideepa',
//     database: 'FOODAPPLICATION',
//     insecureAuth : true
// })

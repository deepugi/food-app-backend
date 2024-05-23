// const express = require('express');
// const mysql = require('mysql2');

// const routes = express.Router({
//     mergeParams: true
// });




// const db = mysql.createPool({
//     host:'database-3.cdgkfoacvf6u.us-east-1.rds.amazonaws.com',
//     user: 'admin',
//     password: 'munideepa',
//     database: 'FOODAPPLICATION',
//     insecureAuth : true,
//     connectTimeout: 80000

// })

// routes.get('/', (req, res, next) => {

// const sqlINsert= "SELECT * from restaurantTB"
// db.query(sqlINsert, (err, result) => {    
//     if(err){
//         console.log(err+'error')
//     }
//     else{
//     console.log('entered the router');
//      res.status(200).json(result)
//     }
// })
// });

// module.exports = {
//     routes,
// };













const express = require('express');
const mysql = require('mysql2');
const restaurantQuery = require('../sequelizeQueries/restaurantQueries');
const userQuery = require('../sequelizeQueries/userQueries');
const menuItemQuery = require('../sequelizeQueries/menuItemQueries');
const walletQuery = require("../sequelizeQueries/walletQueries");
const orderItems = require("../sequelizeQueries/orderItemQueries");
const deliveryQuery = require("../sequelizeQueries/deliveryAgentQueries");
const orderQuery = require("../sequelizeQueries/orderTableQueries");
const cookingRatings = require("../sequelizeQueries/restaurantRatingQueries");
const deliveryRatings = require("../sequelizeQueries/deliveryRatingQueries");
const cookingInstructions = require("../sequelizeQueries/restaurantcookingInstructionQueries");
const deliveryInsttructions = require("../sequelizeQueries/deliveryagentInstructionQueries");






// const restaurantTB = require('../models/restaurantTable');

// const sequelize = require("../util/database");



// db.sequelize.sync().then((req) => {
// console.log('created db');
// }) 

// create main Model




// const Restaurant = restaurantTB.sync().then((result) => {
//     console.log(Restaurant+'response');
//  return result;
// })
// .catch((err) =>{
//   console.log('err'+ err);
// })

// add Product

// const addProduct = async () => {

//     const restaurant = await restaurantTB.create({
//         name: "Manasa"
//       });
//     return restaurant;
// }


//Create restaurant table 

// restaurantQuery.createRestaurantTable();






const routes = express.Router({
    mergeParams: true
});

// routes.get('/', (req, res,next) =>{
//   res.status(200).send({"name": "deepa"});
// }
// );

// routes.get('/', async (req, res) => {
//      const response = await restaurantQuery.getAllProducts();
//      res.status(200).send(response);
//      console.log('success getting the results');
// });


routes.get('/allProducts',  restaurantQuery.getAllProducts);

routes.get('/allUsers',  userQuery.getAllUsers);

routes.get('/allmenuItems', menuItemQuery.getAllMenuItems);

routes.get('/walletDetails', walletQuery.getAllWalletDetails);

routes.get('/orderItems', orderItems.getAllOrderItems);
routes.get('/getMenu', menuItemQuery.getMenu);
routes.get('/deliveryDetails', deliveryQuery.getDeliveryDetails);
routes.get('/orders', orderQuery.getAllOrders);
routes.get('/RestaurantDetails', restaurantQuery.getRestaurantDetailsWithAddress);
routes.get('/UserDetails', userQuery.getUserDetailsWithAddress);
routes.get('/getRestaurant', restaurantQuery.getRestaurantDetailsWithName);
routes.get('/getAllDeliveryAgents', deliveryQuery.getAllDeliveryAgents);
routes.get('/getOrderById', orderQuery.getOrderById);
routes.get('/getcookingRatings', cookingRatings.getAllrestaurantRatings);
routes.get('/getdeliveryRating', deliveryRatings.getAllAgentRatings);
routes.get('/getcookingInstructions', cookingInstructions.getAllCookingInstructions);
routes.get('/getdeliveryInstructions', deliveryInsttructions.getAllAgentInstructions);





// routes.post('/api/create', async(req, res) =>{
//     const response = await addProduct();
//     res.status(200).send(response);
//     console.log(response+'response');
// }
// );


module.exports = {
    routes,
};





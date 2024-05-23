const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
//directive require 
// const restaurantQuery = require('../src/models/restaurantTable'); 

const restaurantQuery = require('../src/sequelizeQueries/restaurantQueries');  
const userQuery = require('../src/sequelizeQueries/userQueries');
const menuItemsQuery = require('../src/sequelizeQueries/menuItemQueries');
const cartItemsQuery = require('../src/sequelizeQueries/cartItemQueries');
const { validateAuth } = require('./middleware/auth');
const orderItemsQuery = require('../src/sequelizeQueries/orderTableQueries');
const deliveryAgentTB = require('../src/sequelizeQueries/deliveryAgentQueries');
const walletQueries = require('../src/sequelizeQueries/walletQueries');
const paymentQueries = require('../src/sequelizeQueries/paymentTableQueries');
const orderItemsQueries = require('../src/sequelizeQueries/orderItemQueries');
const restaurantAddressQueries = require('../src/sequelizeQueries/restaurantAddressQueries');
const userAddressQueries = require('../src/sequelizeQueries/userAddressQueries');
const restaurantAddressQuery = require('../src/sequelizeQueries/restaurantAddressQueries');
const restaurantcookingQuery = require('../src/sequelizeQueries/restaurantcookingInstructionQueries');
const deliverycookingQuery = require('../src/sequelizeQueries/deliveryagentInstructionQueries');
const restaurantRatingQuery = require('../src/sequelizeQueries/restaurantRatingQueries');
const deliveryRatingQuery = require('../src/sequelizeQueries/deliveryRatingQueries');


const inserData = require('../src/util/insertData');

const {
    routes: userRoutes,
} = require('./user/routes');

const app = express();
console.log(`Filename is ${__filename}`);
console.log(`Directory name is ${__dirname}`);

app.use(cors());
app.use(bodyParser.json());
app.use('/',validateAuth, userRoutes);
// app.use('/', userRoutes);

const PORT = process.env.PORT || 8080

// //server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})


module.exports = app;



// const jsonfile = require('jsonfile');
// const path = './restaurants.json';

// jsonfile.readFile(path, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }




// To Create the table
// const val = restaurantQuery.createRestaurantTable();
// restaurantQuery.createRestaurantTable();

// insert the data
// const result = inserData();
// inserData();

// get the data
// console.log(restaurantQuery.getAllProducts());


//Create user table 

// userQuery.createUsersTable();

// insert the user data
// let info = {
//     Name: 'Vinod',
//     Email_Id: 'vallambaimunideepa98@gmail.com',
//     UserRole: 'Agent',
//     sub : '333c6814-730a-4f7d-b748-992b1d582d67',
// }
// userQuery.addInitialUsers(info.Name, info.Email_Id, info.UserRole, info.sub);



// To Create the menu table
// const val = restaurantQuery.createRestaurantTable();
// menuItemsQuery.createMenuItemsTable();

// let info = {
// Item_Name: 'Hotdog',
// Item_Description:'Hotdog potato' ,
// Item_Price: 250,
// Item_URL : "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
// Restaurant_Id: 5
// }



// {
//     id: 52,
//     itemId: "pizza01",
//     imgSrc:
//       "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza6.png?alt=media&token=72a1e335-68d0-4b1c-8bbd-f28c656ce3b5",
//     name: "Deluxe Veggie",
//     ratings: 4,
//     price: "12",
//   },
//   {
//     id: 53,
//     itemId: "hotdog01",
//     imgSrc:
//       "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
//     name: "Hot Dog",
//     ratings: 4,
//     price: "12",
//   },

// const { Item_Name, Item_Description, Item_Price, Item_URL, Restaurant_Id } = {...info};
// menuItemsQuery.addInitialMenuItems( Item_Name, Item_Description, Item_Price, Item_URL, Restaurant_Id);





// To Create the cart Table

// cartItemsQuery.createCartItemsTable();


//To create the order table

// orderItemsQuery.createOrderTable();


//To create the agent table

// deliveryAgentTB.createDeliveryAgentTable();



//To create the wallet table

// walletQueries.createWalletTable();


// Create wallet table 

// userQuery.createUsersTable();

// let info = {
//     walletAmount: 6000,
//     userId: 2
  
// }
// walletQueries.addInitialWallet(info.walletAmount, info.userId);

//create the payment table

// paymentQueries.createPaymentTable();

//create orderItems Table

// orderItemsQueries.createOrderItemsTable();



//Insert into agentDetails

// let info = {
//     Name: 'Vinod',
//     currentLocation:'Marathahalli' ,
//     currentCity: 'Bangalore',
//     IsAvailable : false,    
// }

// deliveryAgentTB.addInitialDeliveryItems(info.Name, info.currentLocation, info.currentCity, info.IsAvailable);





// Create userAddress table
// userAddressQueries.createUserAddressTable();


// let info = {
//     Street: 'GreenGlen Layout',
//     Location: 'Ravindra Apartment',
//     City: 'Bangalore',
//     UserId : 1,
// }
// userAddressQueries.addInitialUsersAddress(info.Street, info.Location, info.City, info.UserId);




//create address table of restaurant

// restaurantAddressQuery.createRestaurantAddressTable();



//insert restaurant details

// let info = {
//     Street: 'Sarjapur Road Behind MK Retail, Before Wipro Corporate Office,',
//     Location: 'Sarjapur Road',
//     City: 'Bengaluru',
//     RestaurantId : 2,
// }
// restaurantAddressQuery.addInitialRestaurantAddress(info.Street, info.Location, info.City, info.RestaurantId);



// create cook

// restaurantcookingQuery.createRestaurantCookingTB();


//delivery

// deliverycookingQuery.createdeliveryInstructionTB();


//res

// restaurantRatingQuery.createrestaurantRatingTB();

//delivery rating create 

// deliveryRatingQuery.createdeliveryRatingTB();







//   jsonObject = data?.results?.data;

// //   const x = jsonValue[0].location_id;
  

//   let name;
//   let address;

//   const db = mysql.createPool({
//     host:'database-3.cdgkfoacvf6u.us-east-1.rds.amazonaws.com',
//     user: 'admin',
//     password: 'munideepa',
//     database: 'FOODAPPLICATION',
//     insecureAuth : true
// })

//   for (i=0; i<jsonObject.length; i++){
//     name = jsonObject[i].name;
// 	city = jsonObject[i].address_obj.city;
// 	ImageURL = jsonObject[i].photo.images.small.url
// 	email = jsonObject[i].email
// 	is_closed =jsonObject[i].is_closed
// 	rating = jsonObject[i].rating
//     if(name !== null && address !== null){

//         const sqlINsert= "INSERT INTO restaurantTB (name, city, ImageURL, email, is_closed, rating ) VALUES (?,?, ?, ?, ?, ?);"
//         db.query(sqlINsert, [name, city, ImageURL, email, is_closed, rating ], (err, result) => {
            
//             if(err){
//                 console.log(err+'error')
//             }
//             else{
//                 console.log('succeded');
//             }

//         })
//     }
 
//  }



  

// });




// app.use(cors());
// app.use(bodyParser.json());
// app.use('/',validateAuth, userRoutes);
// // app.use('/', userRoutes);

// const PORT = process.env.PORT || 8080

// // //server

// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`)
// })


// module.exports = app;


// app.post('/api/insert', (req, res) => {

    
//     const sqlINsert= "INSERT INTO Movie_Reviews (movieName, Movie_Reviewscol) VALUES (?,?);"
//     db.query(sqlINsert, [movieName, movieReview], (err, result) => {
        
//     })
    
// })


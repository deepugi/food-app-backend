const express = require('express');
const mysql = require('mysql2');
const userAddressQueries = require('../sequelizeQueries/userAddressQueries');
const usersTB = require('../models/UsersTB');
const sequelize = require('sequelize');
const Op = sequelize.Op;




// create Table
const createUsersTable = () => {
const Restaurant = usersTB.sync({force:true}).then((result) => {
    // console.log(Restaurant+'response');
    return result;
})
.catch((err) =>{
  console.log('err'+ err);
})
};


//Insert into table - initial data 

const addInitialUsers = async ( Name, Email_Id, UserRole, sub ) => {
  // Name, City, ImageURL, Email, Is_Closed, Rating
  let info = {
    Name: Name,
    Email_Id: Email_Id,
    UserRole: UserRole,
    sub : sub,
}

const users = await usersTB.create(info)
// res.status(200).send(product)
console.log('success inserted');
// console.log(JSON.stringify(product));
}



const addUsers = async (req, res) => {
  // Name, City, ImageURL, Email, Is_Closed, Rating
  let info = {
    Name: Name,
    Email_Id: Email_Id,
    UserRole: UserRole,
    sub : sub,
}


const users = await usersTB.create(info)
res.status(200).send(users);
console.log('success inserted');
// console.log(JSON.stringify(product));
}



//  get all restaurants

const getAllUsers = async (req, res) => {
  let users = await usersTB.findAll({});
  res.status(200).send(users);
}



//get one user based on the sub 
const getOneUser = async (userId) => {
  let product = await usersTB.findOne({ where: { sub: { [Op.like]: "%" + userId + "%" }}})
  console.log('product', product);
  return product;
}



const getUserDetailsWithAddress = async (req, res) => {

  // console.log('request', req);
    const { userIds } = req?.query;

    // const { userIds } = req?.body;
    console.log('userIds', req);

    
    // if(userIds === undefined ){
    //   userIds = [1, 2, 3];
    // }

    let user=[];
    let obj ={}



    try{

    if (userIds !== undefined && userIds !== null) {


  
     for ( i=0; i<userIds.length; i++){
  
      console.log('menui', userIds[i]);
      const result = await usersTB.findAll({ where: { Id:   userIds[i] }});
      const address = await userAddressQueries.getUserAddress(userIds[i]);






      const resultValues = JSON.parse(JSON.stringify(result));


     const addressValues = JSON.parse(JSON.stringify(address));



      // let resultValues

      // if(resultValues !== undefined){

      //  resultValues = JSON.parse(JSON.stringify(result));
      // }

      // let addressValues;
      // if(address !== undefined){
      //  addressValues = JSON.parse(JSON.stringify(address));
      // }
      console.log('restaurantDetails', result );
      console.log('restaurantAddressDetails', address);
      //  console.log('StreetValue', address?.restaurantAddressTB?.dataValues?.Street);
      //  console.log('StreetValue1', JSON.stringify(result));
      console.log('StreetValue12', resultValues);
      console.log('StreetValue123', addressValues);

      
      user.push({
        UserId: resultValues[0]?.Id,
        Street: addressValues[0]?.Street,
        Location: addressValues[0]?.Location,
        Name: resultValues[0]?.Name,
        City: resultValues[0]?.City
      });
     }
    }


  }
  catch (e){
    console.log('exception', e);
  }

  
  


    res.status(200).send(user);
  }
  







// add Product

// const addProduct = async () => {

//     const restaurant = await restaurantTB.create({
//         name: "Manasa"
//       });
//     return restaurant;
// }

// const routes = express.Router({
//     mergeParams: true
// });

// routes.get('/', (req, res,next) =>{
//   res.status(200).send({"name": "deepa"});
// }
// );


// routes.post('/api/create', async(req, res) =>{
//     const response = await addProduct();
//     res.status(200).send(response);
//     console.log(response+'response');
// }
// );


// module.exports = {
//     routes,
// };

module.exports = {
createUsersTable,
addInitialUsers,
addUsers,
getAllUsers,
getOneUser,
getUserDetailsWithAddress
}




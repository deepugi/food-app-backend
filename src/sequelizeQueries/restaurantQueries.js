const express = require('express');
const mysql = require('mysql2');
const restaurantTB = require('../models/restaurantTable');
const ResaddressTable = require('../sequelizeQueries/restaurantAddressQueries');
const sequelize = require('sequelize');
const Op = sequelize.Op;

// const sequelize = require("../util/database");


// db.sequelize.sync().then((req) => {
// console.log('created db');
// }) 

// create main Model


// create Table
const createRestaurantTable = () => {
  const Restaurant = restaurantTB.sync({ force: true }).then((result) => {
    // console.log(Restaurant+'response');
    return result;
  })
    .catch((err) => {
      console.log('err' + err);
    })
};


//Insert into table - initial data 

const addInitialRestaurant = async (Name, City, ImageURL, Email, Is_Closed, Rating) => {
  // Name, City, ImageURL, Email, Is_Closed, Rating
  let info = {
    Name: Name,
    City: City,
    ImageURL: ImageURL,
    Email: Email,
    Is_Closed: Is_Closed,
    Rating: Rating
  }

  const product = await restaurantTB.create(info)
  // res.status(200).send(product)
  console.log('success inserted');
  // console.log(JSON.stringify(product));
}



const addRestaurant = async (req, res) => {
  // Name, City, ImageURL, Email, Is_Closed, Rating
  let info = {
    Name: Name,
    City: City,
    ImageURL: ImageURL,
    Email: Email,
    Is_Closed: Is_Closed,
    Rating: Rating
  }

  const restaurant = await restaurantTB.create(info)
  // res.status(200).send(restaurant);
  console.log('success inserted');
  // console.log(JSON.stringify(product));
}



//  get all restaurants

const getAllProducts = async (req, res) => {
  let products;
  // console.log( JSON.stringify(req));
  const { city, searchType } = req?.query;
  if (city !== undefined && searchType === undefined) {
    products = await restaurantTB.findAll({ where: { City: { [Op.like]: "%" + req.query.city + "%" } } });
  }
  if (city !== undefined && searchType !== undefined) {

    products = await restaurantTB.findAll({
      where: {
        [Op.and]: [
          {
            Name:
              { [Op.like]: "%" + searchType + "%" }
          },

          {
            City:
              { [Op.like]: "%" + req.query.city + "%" }
          }

        ]
      }
    }
    );
  }

  //   if(req?.query?.city){
  //     products = await restaurantTB.findAll({ where: {City:{[Op.like]:"%"+req.query.city+"%"} }});
  // }

  if (city === undefined && searchType !== undefined) {
    products = await restaurantTB.findAll({
      where: {
        Name:
          { [Op.like]: "%" + searchType + "%" }
      },
    }
    );
  }

  if (city === undefined && searchType === undefined) {
    products = await restaurantTB.findAll({});
  }

  res.status(200).send(products);
}


//get restaurants based on the city 

const getAllProductsOfCity = async (req, res) => {

  // const products =  await Product.findAll({ where: { published: true }})
  // where:{name:{[Op.like]:"%"+examName+"%"}},
  let restaurants = await restaurantTB.findAll({ where: { City: { [like]: "%" + req.params.city + "%" } } });
  res.status(200).send(restaurants);
}

const getRestaurantDetailsWithAddress = async (req, res) => {

  // console.log('request', req);
    const { restaurantIds } = req?.query;

    // const { restaurantIds } = req?.body;
    console.log('menuids', restaurantIds);

    let restaurant=[];
    let obj ={}


    
  
  try{
    if (restaurantIds !== undefined && restaurantIds !== null) {
  
     for ( i=0; i<restaurantIds.length; i++){
  
      console.log('menui', restaurantIds[i]);
      const result = await restaurantTB.findAll({ where: { Id:   restaurantIds[i]  }});
      const address = await ResaddressTable.getRestaurantAddress(restaurantIds[i]);
      const resultValues = JSON.parse(JSON.stringify(result));
      const addressValues = JSON.parse(JSON.stringify(address));
      console.log('restaurantDetails', result );
      console.log('restaurantAddressDetails', address);
    //   console.log('StreetValue', address?.restaurantAddressTB?.dataValues?.Street);
    //   console.log('StreetValue1', JSON.stringify(result));
      console.log('StreetValue12', resultValues);
      console.log('StreetValue123', addressValues);
      restaurant.push({
        RestaurantId: resultValues[0]?.Id,
        Street: addressValues[0]?.Street,
        Location: addressValues[0]?.Location,
        Name: resultValues[0]?.Name,
        City: resultValues[0]?.City
      });
     }
    }

  }
  catch{

    console.log('error message', e);
  }


      // restaurant.map((item) => {

      //   item.map( (item1) => {
  
      //     if(restaurantIds.includes((item1.Id))){

      //     }
  
  
      //   })
  
  
  
  
      // });



    // if(restaurantId === undefined){
    //   menuItems = await menuItemTB.findAll({});
    // }
  
    // let menuItems = await menuItemTB.findAll({});
    res.status(200).send(restaurant);
  }


  const getRestaurantDetailsWithName = async (req, res) => {

   
    const { Name } = req?.query;

    console.log('request', Name);

      const result = await restaurantTB.findAll({ where: { Name: Name  }});
     
      res.status(200).send(result);
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
  createRestaurantTable,
  addRestaurant,
  getAllProducts,
  getAllProductsOfCity,
  getRestaurantDetailsWithAddress,
  getRestaurantDetailsWithName
}




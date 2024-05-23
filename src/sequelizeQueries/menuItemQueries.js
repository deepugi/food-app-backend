const express = require('express');
const mysql = require('mysql2');
const menuItemTB = require('../models/menuItemsTB');
const sequelize = require('sequelize');
const Op = sequelize.Op;



// create Table
const createMenuItemsTable = () => {
const menuItemTable = menuItemTB.sync({force:true}).then((result) => {
    // console.log(Restaurant+'response');
    return result;
})
.catch((err) =>{
  console.log('err'+ err);
})
};



//Insert into table - initial data 

const addInitialMenuItems = async ( Item_Name, Item_Description, Item_Price, Item_URL , Restaurant_Id ) => {
  // Name, City, ImageURL, Email, Is_Closed, Rating
  let info = {
    Item_Name: Item_Name,
    Item_Description:Item_Description ,
    Item_Price: Item_Price,
    Item_URL : Item_URL,
    Restaurant_Id: Restaurant_Id
    
}

const menuItems = await menuItemTB.create(info)
// res.status(200).send(product)
console.log('success inserted');
// console.log(JSON.stringify(product));
}



const addMenuItems = async (req, res) => {
  // Name, City, ImageURL, Email, Is_Closed, Rating
  let info = {
    Name: Name,
    Email_Id: Email_Id,
    UserRole: UserRole,
    sub : sub,
}


const menuItems = await menuItemTB.create(info)
res.status(200).send(menuItems);
console.log('success inserted');
// console.log(JSON.stringify(product));
}



//  get all restaurants

const getAllMenuItems = async (req, res) => {


  const { restaurantId } = req?.query;
  console.log('IDvalue', restaurantId);
  let menuItems;


  if (restaurantId !== undefined) {
    menuItems = await menuItemTB.findAll({ where: { Restaurant_Id:  restaurantId   }});
  }
  if(restaurantId === undefined){
    menuItems = await menuItemTB.findAll({});
  }

  // let menuItems = await menuItemTB.findAll({});
  res.status(200).send(menuItems);
}


const getMenu = async (req, res) => {

// console.log('request', req);
  const { menuIds } = req?.query;
  // const { menuIds } = req?.body;
  console.log('menuids', menuIds);
  let menuItems=[];


  try{

  if (menuIds !== undefined && menuIds !== null) {


   for ( i=0; i< menuIds.length; i++){

    console.log('menui', menuIds[i]);
    result = await menuItemTB.findAll({ where: { Id:   menuIds[i]  }});
    menuItems.push(result);

   }


  }
  // if(restaurantId === undefined){
  //   menuItems = await menuItemTB.findAll({});
  // }

  // let menuItems = await menuItemTB.findAll({});
 }

    catch (e){
      console.log('exception', e);
    }

    res.status(200).send(menuItems);
  
  
}



// const getMenuItemsBasedOnResId = async (req, res) => {


//   const { restaurantId } = req?.query;
//   console.log('IDvalue', restaurantId);
//   let menuItems;


//   if (restaurantId !== undefined) {
//     menuItems = await menuItemTB.findAll({ where: { Restaurant_Id: { [Op.like]: "%" + restaurantId + "%" } } });
//   }
//   if(restaurantId === undefined){
//     menuItems = await menuItemTB.findAll({});
//   }

//   // let menuItems = await menuItemTB.findAll({});
//   res.status(200).send(menuItems);
// }




module.exports = {
    createMenuItemsTable,
    addInitialMenuItems,
    addMenuItems,
    getAllMenuItems,
    getMenu
    
}




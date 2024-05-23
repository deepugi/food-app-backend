const orderItemsTB = require('../models/orderItemsTB');
const sequelize = require('sequelize');
const Op = sequelize.Op;



// create Table
const createOrderItemsTable = () => {
  orderItemsTB.sync().then((result) => {
    return result;
  })
    .catch((err) => {
      console.log('err' + err);
    })
};

// id - menuid
// image01 - imageurl
// price - price
// quantity - quantity
// title 
// totalPrice

// Id:{         
//   type: DataTypes.INTEGER,
//   primaryKey: true,
//   autoIncrement: true,
// },
// quantity:{
//   type: DataTypes.INTEGER,
//   allowNull: true,
// },
// price:{
//   type: DataTypes.INTEGER,
//   allowNull: true,
// },
// orderId:{
//   type: DataTypes.INTEGER,
//   allowNull: true,
// },
// menuId:{
//   type: DataTypes.INTEGER,
//   allowNull: true,
// }
// Image, orderId, quantity ( image, name, price)


// on OrderId click  show all the items / menuitems added 

const getAllOrderItems = async (req, res) => {
  let orderItems = await orderItemsTB.findAll({});

  let obj = {};

  orders = [];






  // {
  //   quantity: item.quantity,
  //   price: item.price,
  //   menuId: item.menuid
  // }


  const newData = orderItems.reduce((prev, curr) => {
    console.log('prev, curr', prev, curr);
    if (!prev[curr.orderId]) {
      prev[curr.orderId] = [getFormattedOrderItem(curr)];
    } else {
      prev[curr.orderId].push(getFormattedOrderItem(curr));
    }
    return prev;
    function getFormattedOrderItem({ price, quantity, menuId }) {
      return {  quantity, price, menuId };
    }
  }, {});

  console.log('order', newData);


  // orderItems.filter((item) => {
  //   console.log('item', item.dataValues.orderId);
  //   if (obj === null && obj === undefined) {





  //     orders.push({
  //       'quantity': item.dataValues.quantity,
  //       'price': item.dataValues.price,
  //       'menuId': item.dataValues.menuid
  //     });
  //     obj[item.orderId] = orders;
  //     // obj[item.orderId].push({
  //     //   'quantity': item.dataValues.quantity,
  //     //   'price': item.dataValues.price,
  //     //   'menuId': item.dataValues.menuid
  //     // });
  //   } else {
  //     if (`${item.orderId}` in obj) {
  //       console.log(' already inside ');
  //       orders.push({
  //         'quantity': item.dataValues.quantity,
  //         'price': item.dataValues.price,
  //         'menuId': item.dataValues.menuId
  //       });
  //       obj[item.orderId] = orders;
  //       // obj[item.orderId].push({
  //       //   'quantity': item.dataValues.quantity,
  //       //   'price': item.dataValues.price,
  //       //   'menuId': item.dataValues.menuid
  //       // });
  //     } else {
  //       console.log('else part');
  //       orders.push({
  //         'quantity': item.dataValues.quantity,
  //         'price': item.dataValues.price,
  //         'menuId': item.dataValues.menuid
  //       });
  //       obj[item.orderId] = orders;
  //       // obj[item.orderId].push({
  //       //   'quantity': item.dataValues.quantity,
  //       //   'price': item.dataValues.price,
  //       //   'menuId': item.dataValues.menuid
  //       // });
  //     }
  //   }
  // })

  // // users.map((item) => {

  // console.log('orderItems', obj)
  // console.log('order', orders);

  // })

  res.status(200).send(newData);
}











module.exports = {
  createOrderItemsTable,
  getAllOrderItems

}




const orderTB = require('../models/OrderTB');



// create Table
const createOrderTable = () => {
    orderTB.sync({force: true}).then((result) => {
    // console.log(Restaurant+'response');
    return result;
})
.catch((err) =>{
  console.log('err'+ err);
})
};

const getAllOrders = async (req, res) => {


  // const { restaurantId } = req?.query;
  // console.log('IDvalue', restaurantId);
  let orders;



  orders = await orderTB.findAll({});

  // let menuItems = await menuItemTB.findAll({});
  res.status(200).send(orders);
}


// const getOrderById = async (req, res) => {


//   // const { restaurantId } = req?.query;
//   // console.log('IDvalue', restaurantId);
//   let orders;



//   orders = await orderTB.findAll({});

//   // let menuItems = await menuItemTB.findAll({});
//   res.status(200).send(orders);
// }


const getOrderById = async (req, res) => {


  const { orderId } = req?.query;
  console.log('IDvalue', orderId);
  let order;


  if (orderId !== undefined) {
    order = await orderTB.findAll({ where: { Id:  orderId   }});
  }
  // if(orderId === undefined){
  //   order = await menuItemTB.findAll({});
  // }

  // let menuItems = await menuItemTB.findAll({});
  res.status(200).send(order);
}





module.exports = {
createOrderTable,
getAllOrders,
getOrderById
}
    
    
    
    

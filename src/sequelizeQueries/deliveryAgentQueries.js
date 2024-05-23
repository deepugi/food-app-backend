const deliveryAgentTB = require('../models/DeliverAgentTB');



// create Table
const createDeliveryAgentTable = () => {
    deliveryAgentTB.sync().then((result) => {
    // console.log(Restaurant+'response');
    return result;
})
.catch((err) =>{
  console.log('err'+ err);
})
};




//Insert into table - initial data 
// Name, currentLocation, currentCity, IsAvailable 
const addInitialDeliveryItems = async ( Name, currentLocation, currentCity, IsAvailable  ) => {
  // Name, City, ImageURL, Email, Is_Closed, Rating
  let info = {
    Name: Name,
    currentLocation:currentLocation ,
    currentCity: currentCity,
    IsAvailable : IsAvailable,    
}

const deliveryAgent = await deliveryAgentTB.create(info)
// res.status(200).send(product)
console.log('success inserted');
// console.log(JSON.stringify(product));
}



const getDeliveryDetails = async (req, res) => {


  const { Name } = req?.query;
  // const { Name } = req?.body;
  console.log('IDvalue', Name);
  let deliveryDetails;

  deliveryDetails = await deliveryAgentTB.findAll({ where: { Name: Name   } });
  // let menuItems = await menuItemTB.findAll({});
  res.status(200).send(deliveryDetails);
}


const getAllDeliveryAgents = async (req, res) => {


  // const { Name } = req?.query;
  // // const { Name } = req?.body;
  // console.log('IDvalue', Name);
  let deliveryDetails;

  deliveryDetails = await deliveryAgentTB.findAll({});
  // let menuItems = await menuItemTB.findAll({});
  res.status(200).send(deliveryDetails);
}







module.exports = {
createDeliveryAgentTable,
addInitialDeliveryItems,
getDeliveryDetails,
getAllDeliveryAgents
}
    
    
    
    

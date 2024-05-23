const restaurantAddressTB = require('../models/restaurantAddressTB');
const sequelize = require('sequelize');
const Op = sequelize.Op;



// create Table
const createRestaurantAddressTable = () => {
const restaurantAddress = restaurantAddressTB.sync().then((result) => {
    // console.log(Restaurant+'response');
    return restaurantAddress;
})
.catch((err) =>{
  console.log('err'+ err);
})
};




//Insert into table - initial data 

const addInitialRestaurantAddress = async ( Street, Location, City, RestaurantId ) => {
  // Name, City, ImageURL, Email, Is_Closed, Rating
  let info = {
    Street: Street,
    Location: Location,
    City: City,
    RestaurantId : RestaurantId,
}

const restaurantDetails = await restaurantAddressTB.create(info)
// res.status(200).send(product)
console.log('success inserted');
// console.log(JSON.stringify(product));
}



const getRestaurantAddress = async (restaurantId) => {

      console.log('menuids', restaurantId);

      try{
      result = await restaurantAddressTB.findAll({ where: { RestaurantId: restaurantId    }});
      console.log('result inside restaurant address queries', result);
      }
      catch(e){

        console.log('throwing error', e);
      }
      return result;
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
    createRestaurantAddressTable,
    addInitialRestaurantAddress,
    getRestaurantAddress
}




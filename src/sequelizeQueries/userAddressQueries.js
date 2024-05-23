const usersAddressTB = require('../models/userAddressTB');
const sequelize = require('sequelize');
const Op = sequelize.Op;



// create Table
const createUserAddressTable = () => {
const usersAddress = usersAddressTB.sync().then((result) => {
    // console.log(Restaurant+'response');
    return usersAddress;
})
.catch((err) =>{
  console.log('err'+ err);
})
};




//Insert into table - initial data

const addInitialUsersAddress = async ( Street, Location, City, UserId ) => {
  // Name, City, ImageURL, Email, Is_Closed, Rating
  let info = {
    Street: Street,
    Location: Location,
    City: City,
    UserId : UserId,
}

const users = await usersAddressTB.create(info)
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


const getUserAddress = async (userId) => {

  console.log('userIds', userId);


  if(userId !== undefined){
  const result = await usersAddressTB.findAll({ where: { UserId: userId }});
  console.log('result inside userAddress  queries', result);
  return result;
  }
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
    createUserAddressTable,
    addInitialUsersAddress,
    getUserAddress
}




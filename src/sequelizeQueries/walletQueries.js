const walletTable = require('../models/walletTB');
const userTableQueries = require('../sequelizeQueries/userQueries');
const sequelize = require('sequelize');
const Op = sequelize.Op;



// create Table
const createWalletTable = () => {
    walletTable.sync({force:true}).then((result) => {
    // console.log(Restaurant+'response');
    return result;
})
.catch((err) =>{
  console.log('err'+ err);
})
};




const addInitialWallet = async ( walletAmount, userId ) => {
    // Name, City, ImageURL, Email, Is_Closed, Rating

    let info = {
        walletAmount: walletAmount,
        userId: userId
      
  }
  
  const walletDetails = await walletTable.create(info)
  // res.status(200).send(product)
  console.log('success inserted');
  // console.log(JSON.stringify(product));
  }




//get wallet info using userId

const getAllWalletDetails = async (req, res) => {

    //id is menu_id to get the product details
    const { userId } = req?.query;
    // {name: "Chandler Bing", email: "cb@gmail.com"}
    console.log('info values', req?.query);
    const getUserId = await userTableQueries.getOneUser(userId);
  
    const User_Id = getUserId?.Id;
  
    const walletItems = await walletTable.findOne(
      {
        where: {
          userId:
            { [Op.like]: "%" + User_Id + "%" }
        }
  
      }
    );

    res.status(200).send(walletItems);
  }
  













module.exports = {
    createWalletTable,
    addInitialWallet,
    getAllWalletDetails
    
}
    
    
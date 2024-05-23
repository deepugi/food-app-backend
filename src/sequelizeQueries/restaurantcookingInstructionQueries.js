const restaurantCookingTB = require('../models/restaurantCookingInstructions');



// create Table
const createRestaurantCookingTB = () => {
    restaurantCookingTB.sync().then((result) => {
    // console.log(Restaurant+'response');
    return result;
})
.catch((err) =>{
  console.log('err'+ err);
})
};


const getAllCookingInstructions = async (req, res) => {

    let restaurantCookingInstructions = await restaurantCookingTB.findAll({});
    res.status(200).send(restaurantCookingInstructions);

}













module.exports = {
    createRestaurantCookingTB,
    getAllCookingInstructions
}
    
    
    
    

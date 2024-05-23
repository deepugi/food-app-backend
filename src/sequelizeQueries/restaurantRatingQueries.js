const restaurantRatingTB = require('../models/restaurantRatingTB');



// create Table
const createrestaurantRatingTB= () => {
    restaurantRatingTB.sync().then((result) => {
    // console.log(Restaurant+'response');
    return result;
})
.catch((err) =>{
  console.log('err'+ err);
})
};


const getAllrestaurantRatings = async (req, res) => {

  let restaurantCookingInstructions = await restaurantRatingTB.findAll({});
  res.status(200).send(restaurantCookingInstructions);

}







module.exports = {
    createrestaurantRatingTB,
    getAllrestaurantRatings
}
    
    
    
    

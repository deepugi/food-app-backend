const deliveryRatingTB = require('../models/deliveryRatingTB');



// create Table
const createdeliveryRatingTB = () => {
    deliveryRatingTB.sync().then((result) => {
    // console.log(Restaurant+'response');
    return result;
})
.catch((err) =>{
  console.log('err'+ err);
})
};


const getAllAgentRatings = async (req, res) => {

  let agentInstructions = await deliveryRatingTB.findAll({});
  res.status(200).send(agentInstructions);

}












module.exports = {

    createdeliveryRatingTB,
    getAllAgentRatings
    
}
    
    
    
    

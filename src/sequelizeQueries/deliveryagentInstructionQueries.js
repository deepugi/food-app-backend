const deliveryInstructionTB = require('../models/deliveryInstructionsTB');



// create Table
const createdeliveryInstructionTB = () => {
    deliveryInstructionTB.sync().then((result) => {
    // console.log(Restaurant+'response');
    return result;
})
.catch((err) =>{
  console.log('err'+ err);
})
};


const getAllAgentInstructions = async (req, res) => {

  let agentInstructions = await deliveryInstructionTB.findAll({});
  res.status(200).send(agentInstructions);

}













module.exports = {

    createdeliveryInstructionTB,
    getAllAgentInstructions
    
}
    
    
    
    

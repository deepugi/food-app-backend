const paymentTB = require('../models/paymentTB');
const sequelize = require('sequelize');
const Op = sequelize.Op;



// create Table
const createPaymentTable = () => {
    paymentTB.sync().then((result) => {
    return result;
})
.catch((err) =>{
  console.log('err'+ err);
})
};



module.exports = {
    createPaymentTable
}




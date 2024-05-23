const CognitoExpress = require('cognito-express')
// Setup CognitoExpress
const cognitoExpress = new CognitoExpress({
    region: 'us-east-1',
    cognitoUserPoolId: 'us-east-1_ZsW42bgPL',
    tokenUse: "access",
    tokenExpiration: 3600
  });


  exports.validateAuth = async (req, res, next) => {
    // Check that the request contains a token
    console.log('request',req);
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
      // Validate the token
      const token = req.headers.authorization.split(" ")[1]
      console.log('token', token);
     await cognitoExpress.validate(token, function (err, response) {
        if (err) {
          // If there was an error, return a 401 Unauthorized along with the error
        //   res.status(401).send({"err": "unautherized"});
        //   res.status(401).send(err)
        // console.log('error'+ err);
        res.status(401).send("unautherized")
        
        } else {
          //Else API has been authenticated. Proceed.
        //   res.status(401).send({"name":"deepa"})
        console.log('Authentication Success');
          next();
          // res.status(200).send("authenticated");
        }
      });
    } else {
      // If there is no token, respond appropriately 
      res.status(401).send("No token provided.")
    }
  }
  

// // API Protecting using jwtwebtoken

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const app = express();



// //initially while logging into the app
// app.get('/api/login', function(req, res) {

//     const user = {id:4};
//     const token =  jwt.sign({user}, 'my_secret_key');
 
//     res.send({token: token});
// } );


// // verifying the api if its protected

// app.get('/api/protected', ensureToken, function(req, res){

//     res.send({
//         text: 'its protected'
//     })
// })


// // first get the token on signin and send that to the headers and based on the headers by using verify in webtokn verify it using the secret_key with the token and send back the response of the api other wise dont send th eresponse
// function ensureToken(req, res, next){


//     const bearerToken = req.headers["authorization"];

//     if( typeof bearerToken !== undefined){

//         const tok = bearerToken.split(' ');
//         const realtoken = tok[1];
//         // req.token = realtoken;

//         const verified = jwt.verify(realtoken, 'my_secret_key');
//         if(verified){

//         next();
//         }

//     }
//     else {
//         res.sendStatus(403);
//     }

// }


// app.listen(8081, function(){

// console.log('app is listening at 8081');
// })





// function Car(type, fuelType){
// 	this.type = type;
// 	this.fuelType = fuelType;
// }

// function setBrand(brand){
// 	Car.call(this, "convertible", "petrol");
// 	this.brand = brand;
// 	console.log(`Car details = `, this);
// }

// function definePrice(price){
// 	Car.call(this, "convertible", "diesel");
// 	this.price = price;
// 	console.log(`Car details = `, this);
// }

// const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);



function getMax(){


	let f, s, t = 0;

	if(arr<3){
		return 'errro';
	}
	else{


for(let i=0; i<arr.length; i++){


		if(arr[i]>f){

			first = arr[i];
			s= f;
			l=s;
		}
		else if(arr[i]>s){

	
			s= arr[i];
			l=s;
		}

		else{
			l=arr[i];
		}

	}

}


}

console.log('first, ');




//palandrome


for(let i=0; i<len/2; i++){

	amma = 4
	

	if(str[i] !== str[len-i-1]){

		console.log('not')

	}

}










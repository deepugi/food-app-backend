// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql2');

// // const {
// //     routes: userRoutes,
// // } = require('./user/routes');

// const restaurantQuery = require('../sequelizeQueries/restaurantQueries');  

// const app = express();
// console.log(`Filename is ${__filename}`);
// console.log(`Directory name is ${__dirname}`);


// const jsonfile = require('jsonfile');
// const path = require('../restaurants.json');
// // /Users/presidio/food-app-backend/src/restaurants.json


// const JsonToTable = () => {
// jsonfile.readFile(JSON.stringify(path), (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// //   console.log(data);



// //   JSONParser jsonParser = new JSONParser();
// 		// JSONObject jsonObject = (JSONObject) JSON.parse(reader);
// 		// JSONObject logObject = (JSONObject) JSON"log");
// 		// JSONArray entriesArray = (JSONArray) logObject.get("entries");
// 		// Iterator i = entriesArray.iterator();
// 		// JSONArray jsonArray = new JSONArray();
// 		// while (i.hasNext()) {
// 		// 	JSONObject innerObj = (JSONObject) i.next();
// 		// 	JSONObject textvalue = (JSONObject) innerObj.get("request");
// 		// 	JSONObject data = (JSONObject) textvalue.get("postData");
// 		// 	String data2;
// 		// 	if (data != null) {
// 		// 		data2 = (String) data.get("text");
// 		// 		if (data2 != null) {
// 		// 			try {
// 		// 				JSONObject json = (JSONObject) jsonParser.parse(data2);
// 		// 				JSONArray objdata = (JSONArray) json.get("data");

// 		// 				if (objdata != null) {
// 		// 					for (int k = 0; k < objdata.size(); k++) {
// 		// 						JSONObject h = (JSONObject) objdata.get(k);
// 		// 						String string = (String) h.get("ue_px");
// 		// 						if (string != null) {
// 		// 							postdata.add(string);
// 		// 						}
// 		// 					}
// 		// 				}
// 		// 			} catch (Exception e) {
// 		// 				System.out.println("Exception" + e.toString());
// 		// 			}

// 		// 		}
// 		// 	}
// 		// }




// //   jsonObject = data?.results?.data;

// //   const x = jsonValue[0].location_id;
  

// //   let name;
// //   let address;

// //   const db = mysql.createPool({
// //     host:'database-3.cdgkfoacvf6u.us-east-1.rds.amazonaws.com',
// //     user: 'admin',
// //     password: 'munideepa',
// //     database: 'FOODAPPLICATION',
// //     insecureAuth : true

// // })
//  const count = 0;

//   for (i=0; i<jsonObject.length; i++){
//     Name = jsonObject[i].name;
// 	City = jsonObject[i].address_obj.city;
// 	ImageURL = jsonObject[i].photo.images.small.url
// 	Email = jsonObject[i].email
// 	Is_Closed =jsonObject[i].is_closed
// 	Rating = jsonObject[i].rating
//     if(Name !== null && City !== null && ImageURL !== null && Email !== null && Is_Closed!=null && Rating!=null ){


//        restaurantQuery.addRestaurant(Name, City, ImageURL, Email, Is_Closed, Rating);

      

//     //   console.log('restaurant'+details);
//     //   count = count+1;

//         // const sqlINsert= "INSERT INTO restaurantTB (name, city, ImageURL, email, is_closed, rating ) VALUES (?,?, ?, ?, ?, ?);"
//         // db.query(sqlINsert, [name, city, ImageURL, email, is_closed, rating ], (err, result) => {
            
//         //     if(err){
//         //         console.log(err+'error')
//         //     }
//         //     else{
//         //         console.log('succeded');
//         //     }

//         // })
//     }

//     // return count;
 
//  }






  

// });

// };




// // app.use(cors());
// // app.use(bodyParser.json());
// // app.use('/user', userRoutes);
// // app.use('/', userRoutes);

// module.exports = JsonToTable ;



// // app.post('/api/insert', (req, res) => {

    
// //     const sqlINsert= "INSERT INTO Movie_Reviews (movieName, Movie_Reviewscol) VALUES (?,?);"
// //     db.query(sqlINsert, [movieName, movieReview], (err, result) => {
        
// //     })
    
// // })


























const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

// const {
//     routes: userRoutes,
// } = require('./user/routes');

const restaurantQuery = require('../sequelizeQueries/restaurantQueries');  

const app = express();
console.log(`Filename is ${__filename}`);
console.log(`Directory name is ${__dirname}`);


const jsonfile = require('jsonfile');
const { json } = require('body-parser');
const path = './restaurants.json';


// const JsonToTable = () =>{
// // console.log('path', JSON.stringify(path));
// jsonfile.readFile(path, (err,data) => {
//     if(err){
//         console.log('err'+err);
//     } else {
//         console.log('success'+data);
//     }
// })

// }
// /Users/presidio/food-app-backend/src/restaurants.json


const JsonToTable = () => {
jsonfile.readFile((path), (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
//   console.log(data);



//   JSONParser jsonParser = new JSONParser();
		// JSONObject jsonObject = (JSONObject) JSON.parse(reader);
		// JSONObject logObject = (JSONObject) JSON"log");
		// JSONArray entriesArray = (JSONArray) logObject.get("entries");
		// Iterator i = entriesArray.iterator();
		// JSONArray jsonArray = new JSONArray();
		// while (i.hasNext()) {
		// 	JSONObject innerObj = (JSONObject) i.next();
		// 	JSONObject textvalue = (JSONObject) innerObj.get("request");
		// 	JSONObject data = (JSONObject) textvalue.get("postData");
		// 	String data2;
		// 	if (data != null) {
		// 		data2 = (String) data.get("text");
		// 		if (data2 != null) {
		// 			try {
		// 				JSONObject json = (JSONObject) jsonParser.parse(data2);
		// 				JSONArray objdata = (JSONArray) json.get("data");

		// 				if (objdata != null) {
		// 					for (int k = 0; k < objdata.size(); k++) {
		// 						JSONObject h = (JSONObject) objdata.get(k);
		// 						String string = (String) h.get("ue_px");
		// 						if (string != null) {
		// 							postdata.add(string);
		// 						}
		// 					}
		// 				}
		// 			} catch (Exception e) {
		// 				System.out.println("Exception" + e.toString());
		// 			}

		// 		}
		// 	}
		// }




  jsonObject = data?.results?.data;

//   const x = jsonValue[0].location_id;
  

//   let name;
//   let address;

//   const db = mysql.createPool({
//     host:'database-3.cdgkfoacvf6u.us-east-1.rds.amazonaws.com',
//     user: 'admin',
//     password: 'munideepa',
//     database: 'FOODAPPLICATION',
//     insecureAuth : true

// })
 const count = 0;

  for (i=0; i<jsonObject.length; i++){
    Name = jsonObject[i].name;
	City = jsonObject[i].address_obj.city;
	ImageURL = jsonObject[i].photo.images.small.url
	Email = jsonObject[i].email
	Is_Closed =jsonObject[i].is_closed
	Rating = jsonObject[i].rating
    if(Name !== null && City !== null && ImageURL !== null && Email !== null && Is_Closed!=null && Rating!=null ){
    restaurantQuery.addRestaurant(Name, City, ImageURL, Email, Is_Closed, Rating );
    }

    // return count;
 
 }


});
};




// app.use(cors());
// app.use(bodyParser.json());
// app.use('/user', userRoutes);
// app.use('/', userRoutes);

module.exports = JsonToTable ;



// app.post('/api/insert', (req, res) => {

    
//     const sqlINsert= "INSERT INTO Movie_Reviews (movieName, Movie_Reviewscol) VALUES (?,?);"
//     db.query(sqlINsert, [movieName, movieReview], (err, result) => {
        
//     })
    
// })

var data = require("../data.json");

exports.addFriend = function(request, response){   
	var newFriend = {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "http://lorempixel.com/400/400/people/"
	};
	data.friends.push(newFriend);
	console.log(newFriend);
	response.render("index", data);
	// var newName = request.query.name;
	// if(! objExists(data.friends, newName)) {
	// 	var newFriend = {
	// 		"name": newName,
	// 		"description": request.query.description,
	// 		"imageURL": "http://lorempixel.com/400/400/people/"
	// 	};
	// 	data.friends.push(newFriend);
	// 	console.log(newFriend);
	// 	response.render("index", data);
	// }else{
	// 	alert("~ is your friend already!");
	// }	
};

// function objExists(arr, newName) {
// 	for(i=0; <arr.length; i++) {

// 	}
// }

// exports.addFriend = function(request, response) {   
// 	// Your code goes here
   
// 	var newFriend {
// 	 'name': request.query.name,
// 	 'description': reques.query.description,
// 	 'imageURL': 'http://lorempixel.com/400/400/people'
// 	}
   
// 	console.log(newFriend.name);
// 	console.log(newFriend.description);
// 	data."friends".push(newFriend);
   
// 	res.render('add', data);
   
//    }
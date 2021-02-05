const { json } = require("express");
var data = require("../data.json");

exports.addFriend = function(request, response){   
	// var newFriend = {
	// 	"name": request.query.name,
	// 	"description": request.query.description,
	// 	"imageURL": "http://lorempixel.com/400/400/people/"
	// };
	// data.friends.push(newFriend);
	// console.log(newFriend);
	// response.render("index", data);

	var newName = request.query.name;
	var newDescp = request.query.description;
	if(newName == "" || newDescp == "") {
		console.log("Incomplete information!");
	}else{
		if(! objExists(data.friends, newName)) {
			var newFriend = {
				"name": newName,
				"description": newDescp,
				"imageURL": "http://lorempixel.com/400/400/people/"
			};
			data.friends.push(newFriend);
			console.log(newFriend);
			console.log("# of friends: " + data.friends.length);
		}else{
			console.log(newName + " is your friend already!");
		}	
	}
	response.render("index", data);
};

function objExists(arr, newName) {
	var json_friend;
	// for/of loop
	for(json_friend of arr) {
		// console.log(json_friend.name);
		if(newName === json_friend.name) {
			return true;
		}
	}
	return false;
}

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	// Listen to clicks on the friend's name
	$(".each-friend a").click(function friendClick(e) {
		e.preventDefault();
		// alert("Clicked!");
		var cur_name = $(this).find("h1").text();
		// console.log(cur_name);
		var anag_name = anagrammedName(cur_name);
		// console.log(anag_name);
		$(this).find("h1").text(anag_name);
	});
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else if (name == "Minxuan") {
		return "Xuanmin";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}

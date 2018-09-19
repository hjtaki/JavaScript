// vanilla.js 
// document.getElementById('header').innerHTML = "Bye";

// jQuery is a small and lightweight library that has lots of functions.

// without jQuery
// document.getElementsByTagName('button').onclick(function() {
// 	document.getElementsByTagName('p').style.visibility = "hidden";
// });

// with jQuery
// $("button").click(function(){
// 	$("p").hide();
// });

// functions are first-class citizen
// var move = 10;
// var move = "String?";
// var move = true;
// var move = [1, 2, 3, 4, 5];
// var move = function() { console.log("Hello"); }

// function move() {
// 	console.log("Hello");
// }

function move() {
	var redBox = document.getElementById("animate");
	var position = 0;
	// 1000ms - 1sec
	var moveFrame = function() {
		if (position == 450) {
			clearInterval(id);
		} else {
			position++;
			redBox.style.top = position + "px";
			redBox.style.left = position + "px";
		}
	}
	var id = setInterval(moveFrame, 10);
	
}


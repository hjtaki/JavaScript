// In Javascript, functions are first-class citizen.
let a = 10;
let b = function(){ console.log("functions!"); };

// Arrow functions (ES 6)
let b1 = () => console.log("functions!");


let jQuery = {
	study: function() {console.log('studying');},
	eat: function() {console.log('eating');},
	ajax: function(settings, options) {
		let obj = new XMLHttpRequest();
		obj.open(settings.method, settings.url)
		obj.onload = done;
		obj.send();
		//
		function done() {
			JSON.parse(this.responseText);
		}	
	}
}
// jQuery.ajax();


function htmlElement(tag) {
	let tags = tag;
	return function(content) {
		console.log(`<${tags}>${content}</${tags}>`);
	}
}

let inner = htmlElement('p');
inner("yes!");


// (ES 6) Rest (packing) / Spread (unpacking)
// (ES 6) Default parameters
function average(n1 = 10, ...nums) {
	console.log("n1: " + n1);
	nums.forEach((elem) => {
		console.log(elem);
	});
	nums.map((e) => e * 2);
}
average();

// Higher-Order Functions, Closures, Promises, Async Tasks (Call backs) ...



















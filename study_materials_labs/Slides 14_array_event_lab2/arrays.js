var myArr = ["Vancouver", "Calgary", "Toronto"];

console.log(myArr[0]);

// arr.push(item) - add the item at the end of the arr. 
myArr.push("Edmonton");
console.log(myArr);

// arr.pop() - removes the last item from the arr.
myArr.pop();
console.log(myArr);

// arr.length - the number of elements in arr.
console.log("The length is " + myArr.length);

for (var i = 0; i < myArr.length; i++) {
	if (myArr[i] == "Vancouver") {
		console.log("Vancouver is at index: " + i);
	}
}

// arr.join(str) - joins all elements in the arr with str
var joined = myArr.join(", ");
console.log(joined);

// modifying elements in arr
myArr[0] = "New York";
console.log(myArr);


var cities = ["Vancouver", "New York", "Miami", "Brooklyn", "New Jersey",
 "Calgary", "Seoul", "Tokyo", "Los Angeles", "Sao Paulo",
 "Mexico City", "San Franscisco", "Seattle"];
// how many cities with more than 7 characters?
// loop through the list 
var count = 0;
var long_cities = [];
for(var i = 0; i < cities.length; i++) {
	if (cities[i].length > 7) {
		count++;
		long_cities.push(cities[i]);
	}
}
console.log(count);
console.log(long_cities);


// arr.shift() - shifts the arr left once
var randomArr = [1, 2, 3, 4, 5];
console.log("////////////////////////////////")
console.log(randomArr.shift()); // 1
console.log(randomArr.shift()); // 2
console.log(randomArr); // [3, 4, 5] 

// arr.unshift(item) - adds the item from the left
randomArr.unshift(1);
console.log(randomArr);


// Delete elements
var fruits = ["Banana", "Orange"];
delete fruits[0];
fruits.shift()
console.log(fruits);


// Splice an array 
// 1. remove and add: arr.splice(where, how_many_remove, what, what, ...);

var fruits = ["Banana", "Orange"];
fruits.splice(1, 1, "Kiwi");
console.log(fruits);

// 2. remove : arr.splice(1(from), 3(nums to remove));
var fruits = ["Banana", "Orange", "Orange",  "Orange",  "Orange"];
fruits.splice(1, 3);
console.log("SPLICED: " + fruits)


// .concat : combine multiple arrays
var arr1 = [1, 2, 3];
var arr2 = [4, 2, 3];
var arr3 = [5, 2, 3];

var combined = arr1.concat(arr2);
console.log(combined);


// .slice(): slices out a piece of an arr
var arr = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(arr.slice(1, 3));
console.log(arr.slice(1));


 // (Optional)
var c = 0;
var lc = [];
cities.forEach((city) => {
	if (city.length > 7) {
		c++;
		lc.push(city);
	}
});

var longCities = cities.filter(city => city.length > 7);
var cities_modified = cities.map(city => city + "!"); // city => city + city

var addTwo = (a, b) => a + b;
var reduced = cities.reduce(addTwo);
console.log(reduced);


// Modern JS (ECMAScript 5, 6)
// Higher-Order Functions(forEach, Map, filter...)
myArr.forEach((item) => {
	if (item == "Vancouver") {
		console.log("Yeah!");
	}
});







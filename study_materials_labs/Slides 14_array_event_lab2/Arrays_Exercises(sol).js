// 1
function is_array(input) {
	if (input instanceof Array){
		return true;
	} else {
		return false;
	}
}

console.log(is_array("Vancouver"));
console.log(is_array([1, 2, 4, 0]));

// 2
function joinWith(arr) {
	console.log(arr.join(","));
	console.log(arr.join(","));
	console.log(arr.join("+"));
}

joinWith(["Red", "Green", "White", "Black"]);

// 3
function compare(a, b) {
	return a - b; 
}

function sortArray(arr) {
	arr.sort(compare);
	console.log(arr);
}

// (Optional) - Selection Sort
function sortArray2(arr){
	for(var i = 0; i < arr.length; i++) {
		var index_min = i;
		for(var j = i; j < arr.length; j++) {
			if (arr[j] < arr[index_min]) {
				index_min = j;
			}
		}
		// swap
		var temp = arr[i];
		arr[i] = arr[index_min];
		arr[index_min] = temp;
	}
	console.log(arr);
}

sortArray2([3, 8, 7, 6, 5, -4, -3, 2, 1]);


// 4
function frequencyOfElements(arr) {
	// Object(count) to store key: value
	count = {};
	for(var i = 0; i < arr.length; i++) {
		if (count[arr[i]]) {
			count[arr[i]] += 1;
		} else {
			count[arr[i]] = 1;
		}
	}
	// which key has the largest value?
	var keys = Object.keys(count);
	var max = count[keys[0]];
	var index = keys[0];
	for(var i = 1; i < keys.length; i++){
		if (max < count[keys[i]]) {
			max = count[keys[i]]; // 5
			index = keys[i]; // 'a'
		}
	}
	console.log(index + ": " + max);
}
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
frequencyOfElements(arr1);

// 5

var a = [[1, 2, 1, 24], 
		 [8, 11, 9, 4], 
		 [7, 0, 7, 27], 
		 [7, 4, 28, 14], 
		 [3, 10, 26, 7]];

// 2D Arrays
// a[x][y] -> x: row, y: col
// a[0][0] -> 1
// a[1][1] -> 11
// a[2][2] -> 7
// ...
function print_two_dim(arr) {
	for(var r = 0; r < arr.length; r++) {
		console.log("row " + r);
		for(var c = 0; c < arr[r].length; c++) {
			console.log(" " + arr[r][c]);
		}
	}
}
print_two_dim(a);

// 6
function remove_duplicates(arr) {
	var dups_removed = [];
	for(var i = 0; i < arr.length; i++){
		if (dups_removed.indexOf(arr[i]) < 0){
			dups_removed.push(arr[i]);
		}
	}
	console.log(dups_removed);
}
remove_duplicates([1, 2, 3, 3, 3, 4, 6, 6, 7, 8]);

// 7
// (1)
function sumOfIndividual(arr1, arr2) {
	// length of arr1 [1, 2, 3], arr2 [1, 2, 3, 4]
	var combined;
	if (arr1.length < arr2.length) {
		combined = addUp(arr1, arr2);
	} else {
		combined = addUp(arr2, arr1);
	}
	console.log(combined);
}

function addUp(arr1, arr2) {
	var combined = [];
	var i;
	for(i = 0; i < arr1.length; i++) {
		combined.push(arr1[i] + arr2[i]);
	}
	for(var j = i; j < arr2.length; j++) {
		combined.push(arr2[i]);	
	}
	return combined;
}

sumOfIndividual([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]);

// (2)
function sumOfIndividual(arr1, arr2) {
	var diff = arr1.length - arr2.length;
	if (diff < 0) {
		for(var i = 0; i < -diff; i++) {
			arr1.push(0);	
		}
	} else {
		for(var i = 0; i < diff; i++) {
			arr2.push(0);	
		}
	}
	for(var i = 0; i < arr1.length; i++) {
		arr1[i] = arr1[i] + arr2[i];
	}
	return arr1;
}


// 8
function findDuplicates(arr) {
	for(var i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i], i + 1) > 0) {
			return true;
		}
	}
	return false;
}
console.log(findDuplicates([4, 5, 8, 10, 12, 13, 12]));
console.log(findDuplicates([4, 5, 8, 10, 12, 13]));


// 9
function merge(arr1, arr2) {
	remove_duplicates(arr1.concat(arr2));
}

merge([1,2,3], [2, 30, 1]);

// 10
function getRandomItem(arr) {
	var numItems = arr.length;
	var randomIndex = Math.floor(Math.random() * numItems);
	return arr[randomIndex];
}

console.log(getRandomItem([3, 2, 30, 1]));













































// 1
function rotateLeft3(arr) {
	return [arr[1], arr[2], arr[0]];
}

function rotateLeft3_2(arr) {
	var first = arr.shift();
	arr.push(first);
	return arr;
}

var ex = [1, 2, 3];
console.log(rotateLeft3(ex));

// 2
function reverse3(arr) {
	return arr.reverse();
}

var arr = [1, 2, 3];
console.log(reverse3(arr));

// 3
function has23(arr) {
	return arr.includes(2) || arr.includes(3);
}

// 4 - arr length of 3
function fix23(arr) {
	var myArr = arr;
	if (myArr[0] == 2 && myArr[1] == 3) {
		myArr[1] = 0;
	} else if (myArr[1] == 2 && myArr[2] == 3){
		myArr[2] = 0;
	}
	return myArr;
}

function fix23_2(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		if (arr[i] == 2 && arr[i + 1] == 3) {
			arr[i + 1] = 0;
		}
	}
	return arr;
}

console.log(fix23_2([1,2,3]));

// 5
function maxTriple(arr) {
	var first = arr[0];
	var mid = arr[parseInt(arr.length / 2)];
	var last = arr[arr.length - 1];
	var all = [first, mid, last];
	var sorted = all.sort();
	return sorted[2];
}

console.log(maxTriple([7, 5, 3]));

// 6
function swapEnds(arr) {
	if (arr.length <= 1) {
		return arr;
	} else {
		// swap
		var temp = arr[0];
		arr[0] = arr[arr.length - 1];
		arr[arr.length - 1] = temp;
		return arr;
	}
}


// 7
function unlucky1(arr) {
	if (arr.length < 2) {
		return false;
	}
	// [1, 3, ....] -> true
	if (arr[0] == 1 && arr[1] == 3) {
		return true;
	}
	// [x, 1, 3, ...] -> true
	if (arr.length >= 3 && arr[1] == 1 && arr[2] == 3) {
		return true;
	}
	// [x, ..., 1, 3] -> true
	if (arr[arr.length - 2] == 1 && arr[arr.length - 1] == 3) {
		return true;
	} 
	return false;
}

// 8
function front11(arr1, arr2) {
	// [], []
	if (arr1.length == 0 && arr2.length == 0) {
		return [];
	}
	// [x, x, ...], []
	else if (arr1.length > 0 && arr2.length == 0) {
		return [arr1[0]];
	}
	// [], [x, x, ...]
	else if (arr1.length == 0 && arr2.length > 0) {
		return [arr2[0]];
	}
	// [x, x, ...], [x, x, ...]
	else if (arr1.length > 0 && arr2.length > 0) {
		return [arr1[0], arr2[0]];
	}
}

// 9
function isEverywhere(arr, num) {
	// [1, 2, 1, 0] -> true
	// [1, 2, 0, 1], 1 -> false
	for(var i = 0; i < arr.length - 1; i++){
		if (arr[i] != num && arr[i + 1] != num) {
			return false;
		}
	}
	return true;
}
console.log(isEverywhere([1, 2, 1, 4], 1)); // t
console.log(isEverywhere([1, 2, 1, 3], 2)); // f
console.log(isEverywhere([1, 2, 1, 3, 4], 1)); // f

// 10
// loop through the elements in the arr
// var tenMode = 20;
// [2, 10, 10, 10, 20, 20]
function tenRun(arr) {
	var tenMode = -1;
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] % 10 == 0) {
			tenMode = arr[i];
		} else if (tenMode != -1) {
			arr[i] = tenMode;
		}
	}
	return arr;
}

function tenRun2(arr) {
	var newArr = [];
	var i = 0;
	while (i < arr.length) {
		if (arr[i] % 10 != 0){
			newArr.push(arr[i]);
			i++;
		} else {
			var mT = arr[i];
			newArr.push(mT);
			while (i < arr.length && arr[i] % 10 != 0) {
				newArr.push(mT);
				i++;
			}
		}
	}
	return newArr;
}


// 11. twoTwo
function twoTwo(arr) {
	if (arr.length == 1 && arr[0] == 2) {
		return false;
	}
	// edge case [2, x, ...]
	if (arr.length > 1 && (arr[0] == 2 && arr[1] != 2)){
		return false;
	}
	// [x!=2, 2, y!=2]
	for(var i = 1; i < arr.length - 1; i++) {
		if (arr[i] == 2 && arr[i+1] != 2 && arr[i-1] != 2) {
			return false;
		} 
	}
	return true;
}

// 12
function shiftLeft(arr) {
	// [1, 2, 3] -> [2, 3, 1]
	arr.push(arr.shift())
	return arr;
}

// 13
function evenOdd(arr) {
	var even = [];
	var odd = [];

	for(var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0){
			even.push(arr[i]);
		} else {
			odd.push(arr[i]);
		}
	}
	return even.concat(odd);
}

// 14
function fizzBuzz(s, e) {
	var arr = [];
	for(var i = s; i < e; i++) {
		if (i % 15 == 0) {
			arr.push("FizzBuzz");
		} else if (i % 5 == 0) {
			arr.push("Buzz");
		} else if (i % 3 == 0) {
			arr.push("Fizz");
		} else {
			// coerced 10 -> "10"
			arr.push("" + i);
		}
	}
	return arr;
}


// 15
function countClumps(arr) {
	// [1, 2, 2, 3, 4, 4] -> 2
	// [1, 1, 2, 1, 1] -> 2    
	// [1, 1, 1, 1, 1] -> 1
	var count = 0;
	var isClump = false;

	for(var i = 0; i < arr.length - 1; i++){
		if (isClump) {
			if (arr[i] != arr[i+1]) {
				isClump = false;
			}
		} else if (arr[i] == arr[i+1]) {
			isClump = true;
			count++;
		}
	}
	return count;
}

























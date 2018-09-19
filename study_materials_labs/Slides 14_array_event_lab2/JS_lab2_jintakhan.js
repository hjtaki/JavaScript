console.log("-----------1--------------")

// 1

// rotateLeft3([1, 2, 3]) → [2, 3, 1]
// rotateLeft3([5, 11, 9]) → [11, 9, 5]
// rotateLeft3([7, 0, 0]) → [0, 0, 7]

function rotateLeft3(arr) {
	var left =arr.shift()
	arr.push(left)

	console.log(arr)

}


rotateLeft3([1, 2, 3])
rotateLeft3([5, 11, 9])
rotateLeft3([7, 0, 0])


console.log("-----------2--------------")

// 2

// reverse3([1, 2, 3]) → [3, 2, 1]
// reverse3([5, 11, 9]) → [9, 11, 5]
// reverse3([7, 0, 0]) → [0, 0, 7]

function reverse3(a) {
	var result=[]
	for (var i=0; i<a.length; i++){
		result.unshift(a[i])
	}
	console.log(result)
}

// function reverse3(a){
// 	return a.reverse();
// }

reverse3([1, 2, 3])
reverse3([5, 11, 9])
reverse3([7, 0, 0])


console.log("-----------3--------------") //wrong

// 3

// has23([2, 5]) → true
// has23([4, 3]) → true
// has23([4, 5]) → false

function has23(arr){
	for (var i=0; i<arr.length; i++){
		if (arr[i] ==2){
			var result = true;
			break
		}
		else
			result =false;

	}
	console.log(result)
}

// use include function


has23([2, 5])
has23([4, 3])
has23([4, 5])


console.log("-----------4--------------") // wrong

// 4

// fix23([1, 2, 3]) → [1, 2, 0]
// fix23([2, 3, 5]) → [2, 0, 5]
// fix23([1, 2, 1]) → [1, 2, 1]

function fix23(arr){
	var result=[]
	for (var i=0; i<arr.length; i++){
		if (arr[i]==3){
			result.push(0)
		}
		else{
			result.push(arr[i])
		}

		}console.log(result);}




fix23([1, 2, 3])
fix23([2, 3, 5]) 
fix23([1, 2, 1]) 

console.log("-----------5--------------")

// 5

// maxTriple([1, 2, 3]) → 3
// maxTriple([1, 5, 3]) → 5
// maxTriple([5, 2, 3]) → 5

function maxTriple(arr){
	var max= Math.max.apply(null, arr);
	return max;
}	


console.log(maxTriple([1, 2, 3]))
console.log(maxTriple([1, 5, 3]))
console.log(maxTriple([5, 2, 3]))


console.log("-----------6--------------")
// 6 

// swapEnds([1, 2, 3, 4]) → [4, 2, 3, 1]
// swapEnds([1, 2, 3]) → [3, 2, 1]
// swapEnds([8, 6, 7, 9, 5]) → [5, 6, 7, 9, 8]

function swapEnds(arr){
	if(arr.length<=1){
		return arr
	}
	else{
	var front = arr.shift();
	console.log(front)
	console.log(arr)
	var end = arr.pop();
	console.log(end)

	arr.unshift(end);
	arr.push(front);

	return arr
	}
}




console.log(swapEnds([1, 2, 3, 4]))
console.log(swapEnds([1, 2, 3]))
console.log(swapEnds([8, 6, 7, 9, 5]))

console.log("-----------7--------------")//wrong .

// 7

// 7. We'll say that a 1 immediately followed by a 3 in an 
// array is an unlucky 
// 1. Return true if the given array contains an unlucky 1 
// in the first 2 
// or last 2 positions in the array.   

// unlucky1([1, 3, 4, 5]) → true 
// unlucky1([2, 1, 3, 4, 5]) → true 
// unlucky1([1, 1, 1]) → false

function unlucky1(arr){
	for (var i=0; i<arr.length; i++){
		if(arr[i]==1 && arr[i+1]==3){
			result = true ;
			break
			
		}
		else{
			result= false;
		}
	}console.log(result)}






unlucky1([1, 3, 4, 5])
unlucky1([2, 1, 3, 4, 5])
unlucky1([1, 1, 1])


console.log("-----------8--------------")

// 8


// front11([1, 2, 3], [7, 9, 8]) → [1, 7]
// front11([1], [2]) → [1, 2]
// front11([1, 7], []) → [1]

function front11(arr1,arr2){
	var result =[]
	if (arr2[0] == undefined || arr1[0] == undefined){
	 result.push(arr1[0])}

	else{

	result.push(arr1[0])
	result.push(arr2[0])
	}

	return result


}

console.log(front11([1, 2, 3], [7, 9, 8]))
console.log(front11([1], [2]))
console.log(front11([1, 7], []))

console.log("-----------9--------------")

// 9. We'll say that a value is "everywhere" in an array if for every 
// pair of adjacent elements in the array, at least one of the pair
//  is that value. Return true if the given value is everywhere in the array.

// isEverywhere([1, 2, 1, 3], 1) → true
// isEverywhere([1, 2, 1, 3], 2) → false
// isEverywhere([1, 2, 1, 3, 4], 1) → false

function isEverywhere(arr,a){
	var count=0
	for (var i=0; i<arr.length-1; i++){
		if (arr[i]==a || arr[i+1]==a){
			count ++;
		}}

	if (count==arr.length-1){
		var result = true;

	}

	else{
		result = false;}

	console.log(result);
	
	}

isEverywhere([1, 2, 1, 3], 1)
isEverywhere([1, 2, 1, 3], 2)
isEverywhere([1, 2, 1, 3, 4], 1)

console.log("-----------10--------------") // need to compare with sol


// 10. For each multiple of 10 in the given array, 
// change all the values following it to be that multiple of 10, 
// until encountering another multiple of 10. 
// So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.   


function tenRun(arr){
		var result=[]
		result.push(arr[0])

	for (var i=1; i<arr.length; i++){
		if (arr[i] % 10==0)
		{
			result.push(arr[i])
		}
		else {

				if (arr[i-1] % 10==0)
				{
					result.push(arr[i-1])
				}
				else if(arr[i-2] % 10==0)
				{
					result.push(arr[i-2])
				}
				else
				{
					result.push(arr[i]);
				}

			}


	
}return result;}


// var arr = [ 'A', 'B', 'D', 'E' ];
// arr.insert(2, 'C');
// => arr == [ 'A', 'B', 'C', 'D', 'E' ]


// tenRun([2, 10, 3, 4, 20, 5]) → [2, 10, 10, 10, 20, 20] 
// tenRun([10, 1, 20, 2]) → [10, 10, 20, 20] 
// tenRun([10, 1, 9, 20]) → [10, 10, 10, 20]



console.log(tenRun([2, 10, 3, 4, 20, 5]))
console.log(tenRun([10, 1, 20, 2]))
console.log(tenRun([10, 1, 9, 20]))



console.log("Q-----------11--------------Q: how to devide into 3range?")

// 11. Given an array of ints, return true if every 2 that appears in the array 
// is next to another 2.

// twoTwo([4, 2, 2, 3]) → true
// twoTwo([2, 2, 4]) → true
// twoTwo([2, 2, 4, 2]) → false

function twoTwo(arr){
	for (var i=0; i<arr.length; i++)
{
		if (arr[i]==2 && arr[i+1]==2){
			if (arr[i-1]!=2 && arr[i+2]!=2){
				result=true;
				break
			}

			
		}
		else
			result= false
			
}
console.log(result)}


twoTwo([4, 2, 2, 3])
twoTwo([2, 2, 4])
twoTwo([2, 2, 4, 2])

console.log("-----------12--------------")


// 12. Return an array that is "left shifted" by one 
// -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify 
// and return the given array, or return a new array.

function shiftLeft(arr){
	var result =[];
	arr.push(arr[0])
	arr.shift(arr[0])
	return arr;
}

// shiftLeft([6, 2, 5, 3]) → [2, 5, 3, 6]
// shiftLeft([1, 2]) → [2, 1]
// shiftLeft([1]) → [1]

console.log(shiftLeft([6, 2, 5, 3]))
console.log(shiftLeft([1, 2]))
console.log(shiftLeft([1]))

console.log("-----------13--------------")


// 13. Return an array that contains the exact same numbers as the given array,
//  but rearranged so that all the even numbers come before all the odd numbers. 
//  Other than that, the numbers can be in any order. You may modify and 
//  return the given array, or make a new array.

// evenOdd([1, 0, 1, 0, 0, 1, 1]) → [0, 0, 0, 1, 1, 1, 1]
// evenOdd([3, 3, 2]) → [2, 3, 3]
// evenOdd([2, 2, 2]) → [2, 2, 2]

function evenOdd(arr){
	var even=[];
	var odd=[];
	for (var i =0; i<arr.length; i++){
		if(arr[i] ==0){
			even.unshift(arr[i]);
		}
		else if (arr[i] %2 ==0){
			even.push(arr[i]);
		}
		else if (arr[i] %2 !=0){
			odd.push(arr[i]);
		}
		
	}

	var result = even.sort().concat(odd.sort())
	return result
}




console.log(evenOdd([1, 0, 1, 0, 0, 1, 1]))
console.log(evenOdd([3, 3, 2]))
console.log(evenOdd([2, 2, 2]))


console.log("-----------14--------------")




// fizzBuzz(1, 6) → ["1", "2", "Fizz", "4", "Buzz"]
// fizzBuzz(1, 8) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]
// fizzBuzz(1, 11) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]



function fizzBuzz(from,to)
{
	var list = []

for (var i=from; i<to; i++)
{
		list.push(i)}					//list = [from,. .....to-1]
for (var j=from; j<to; j++)

{		
		if (list[j] % 15 ==0){
			list[j]="FizzBuzz"
		}	
		else if (list[j]%3==0){
			list[j]="Fizz"
		}								//[]
		
		else if (list[j]%5==0){
			list[j]="buzz"
		}
}


return list;
}


console.log(fizzBuzz(1, 6))
console.log(fizzBuzz(1, 8))
console.log(fizzBuzz(1, 11))



console.log("-----------15--------------")

// 15. Say that a "clump" in an array is a series of 2 or 
// more adjacent elements of the same value. Return the number 
// of clumps in the given array.

// countClumps([1, 2, 2, 3, 4, 4]) → 2
// countClumps([1, 1, 2, 1, 1]) → 2
// countClumps([1, 1, 1, 1, 1]) → 1

function countClumps(arr){
var count =0
	for (var i=0; i<arr.length; i++){
		if (arr[i]==arr[i+1] && arr[i+1]!=arr[i+2]){
			count ++;
		}

	}
	return count;

}


console.log(countClumps([1, 2, 2, 3, 4, 4]))
console.log(countClumps([1, 1, 2, 1, 1]))
console.log(countClumps([1, 1, 1, 1, 1]))



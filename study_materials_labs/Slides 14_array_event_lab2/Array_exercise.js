// JavaScript - Arrays Exercises


// 1. Write a JavaScript function to check whether an `input` is an array or not. 

function is_array(a) {
	return Array.isArray(a)
}
// Test Data :
console.log(is_array('Vancouver')); 
console.log(is_array([1, 2, 4, 0]));
// false
// true

// 2. Write a simple JavaScript program to join all elements of the following array into a string. 
var myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join())
console.log(myColor.join(""))
console.log(myColor.join("+"))


// Expected Output : 
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"


// 3. Write a JavaScript program to sort the items of an array. 
var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var sorted = arr1.sort();
var result =[];
for (var i =0; i < arr1.length; i++){
	result.push(sorted[i]);
}
console.log(result);

// Sample Output : -4,-3,1,2,3,5,6,7,8

console.log("+++++++++++++++++4+++++++++++++++++++++++")

//  4. Write a JavaScript program to find the most frequent item of an array. 


var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var AtleastNo=1;
var count=0

for(i=0; i<arr1.length; i++)
{
	for(j=0; j<arr1.length; j++)
	{
		if (arr1[i]==arr1[j]){
			count++;
		}
		else if (count >AtleastNo)
			{
				AtleastNo = count;
				var result = arr1[i];
			}	
	}

	count=0;
}

console.log(result+"("+ AtleastNo +  "times )" )

// Sample Output : a ( 5 times ) 



console.log("---------5---------")

// 5. Write a JavaScript program which prints the elements of the following array. 
// Note : Use nested for loops.
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(var i=0; i< a.length; i++){
	var first_ele = a[i];
	console.log("row"+i);
	for( var j=0; j < first_ele.length; j++){
		var all_ele = first_ele[j];
		console.log(all_ele);
	}

// console.log(all_ele)
}




// Sample Output : 
// "row 0" 
// " 1" 
// " 2" 
// " 1"
// " 24"
// "row 1" 
// ......
// ......

console.log("---------6---------")
// 6. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

var list_6 =[1,2,6,8,6,5,3,2,1,6,7]
var new_list_6 = list_6.sort()
var result_6 =[]
for (var i=0; i<new_list_6.length; i++){
	if (new_list_6[i]!=new_list_6[i+1]){
		result_6.push(new_list_6[i])

	}
}
console.log(result_6)


// 7. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. 
// Sample array : 

var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];
var result = []
var result1= []

if (array2.length > array1.length) {
	var long_len = array2.length;}
else if (array2.length < array1.length) {
	var long_len = array1.length;}
else
	var long_len = array1.length;

for( var i =0; i<long_len; i++){
	console.log(result)
	result[i] = array1[i]+array2[i];

		if (result[i]==NaN){
			return console.log("asd")

		}


	}

// Expected Output : 
// [4, 5, 8, 10, 12, 13]

console.log("---------8---------")

// 8. Write a JavaScript program to find duplicate values in a JavaScript array.

var li = [1,2,3,1]
var li_8 = li.sort()
var result_8 = []

for(var i = 0; i<li.length; i++){
	if (li_8[i]==li_8[i+1]){
		result_8.push(li_8[i])

		}
}
console.log(result_8)

console.log("---------9---------")

// 9. Write a JavaScript function to merge two arrays and removes all duplicates elements. 

// Test data :
var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1];
var result_9 = []

var all_array = array1.concat(array2);
all_array.sort()

for(i=0; i<all_array.length; i++){
	if (all_array[i]!=all_array[i+1]){
	result_9.push(all_array[i]);
}}

console.log(result_9)

// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]





console.log("---------10---------")

// 10. Write a JavaScript function to get a random item from an array.
var array10 = ["a","b","c","d","e","f","g",];

var random_index = Math.floor(Math.random()*array10.length)




// array10[]

console.log(array10[random_index])


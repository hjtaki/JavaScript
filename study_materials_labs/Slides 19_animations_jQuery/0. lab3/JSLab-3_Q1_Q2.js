// Q1
// a. 

var arr = ['dog','cat','deer']
var result = arr[0]+arr[2];
console.log(result)

// dogdeer

// b.

var girls =["Cecilie","Lone"]
var boys =["Emil","Tobias","Linus"]
var chilldren = girls.concat(boys)
console.log(chilldren)


// //c.
// var arr = [20,30];
// for(var i =arr.length; i<5; i +=1){
// 	arr[i]]=Math.pow(i,2);
// }

// console.log(arr)

//d

var arr = [10,20,30,40,50,60,70,90];
var sum = 0;

for(var i =1; i<7; i+=1){
	sum = sum +arr[i];
}

console.log(sum) //270

var arr = [10,20,30,40,50,60,70,90];
var sum = 0;

for(var i =0; i<8; i+=1){
	sum = sum +arr[i];
}

console.log(sum) //270


//e

var DL = 5;
var d =[25.0,9.0,10.0,25.0,15.0]
var mi=0;
var m=d[mi];

for(var i =1; i<DL; i++){
	if(d[i]<m){
		mi=i;
		m=d[mi];
		console.log(m)
	}
}

console.log("mi=",mi,"m=",m);
//9
//mi= 1 m= 9



//Q2

function sumArray(arr,num) {
	// var lastEle = arr[num-1]					//5			
	// var arrSum = (arr[0]+lastEle)/2 * num-1 	//15

	// console.log(arr)
	// console.log(num)	//5
	// console.log(arr[0]);//1
	// console.log(lastEle);
	// console.log(arrSum);

		result =0
	for (var i =1 ; i<num+1; i++){

		var first = i
		var last = i+num-1
		var OneRow=(first+last)*0.5*num

		result += OneRow

	}	console.log(result);
}


sumArray([1,2,3,4,5],5)







/*
	JavaScript Lab1
	
	Jintak Han
*/


// Question 1


function makeAbba(a, b) {
	return a + b + b + a;
}


// Question 2 ok


function endsLy(a){
	if (a.substr(-2,2) =="ly"){
		return true;
	}
	else{
		return false;
	}

}






// Question 3 ok

function firstHalf(a){
	var len= a.length;
	return a.slice(0,len/2);}






// Question 4 ok


function right2(a){
	var len = a.length;
	return a.slice(-2)+ a.slice(0,len-2);
}



// Question 5 ok

function conCat(a,b){
	return a + b

}




// Question 6 ok

function frontAgain(a){
	if (a.slice(0,2) == a.slice(-2)){
		return "True";
	}
	else {
		return "False"
	}

}





// Question 7 ok


function deFront(a){
	var len = a.length;
	if (a.charAt(0) =="a"){
		return "a"+ a.slice(-2);
	}
	else if (a.charAt(1)=="b"){
		return a.slice(1);
	}
	else{
		return a.slice(2);
	}

}




// Question 8 ok

function withoutX2(a){
	if (a.charAt(0) == "x"){
		return a.slice(1);
	}
	else if (a.charAt(1)== "x"){
		return a.slice(0,1) + a.slice(2);
	}
	else{
		return a
	}


}





// Question 9 ok

function lastChars(a,b){
	if (b.length == 0){
		return a.charAt(0)+"@";
	}
	else{
		return a.charAt(0) + b.charAt(b.length-1);
	}

}





//Question 10 ok

function lmiddleTwo(a){
	var len = a.length;
	return a.slice(len/2-1,len/2+1);
}





































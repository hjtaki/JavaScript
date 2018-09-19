//search() method
//uses an ergec to search for a match and returns the position(index) of the match.
 
var str = "let's go to Vancouver"
// i : case-insensitive :ingore upper or lower
var n = str.search(/V.+/i)
console.log(n);



//replace(old string, new) method
// returns a modified string where the pattern is replace
var str1= "I got a job at Microsoft"
str1.replace("Microsoft","Apple")
str1.replace(/microsoft/i,"Apple")
console.log(str1)


//g : global :used to form global match 
//	: find all matches rather than stopping after the first match
//ex) fdke _sd2 _dsd _ ds12
var str2 = "fdke _ sd 2 _dsd _ ds12";
var res2=str2.replace(/[\W]_/gi,"");
console.log(res2)



var regex = /[\W_\d]/g;
var regex1 = new RegExp(/[\W_\d]/,"g") 





function palindrome(str) {
  // 1.ignoring punctuation, case, and spacing.
  
  var a = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/gi,"");
  var b = a.replace(/[\W]/gi,"");
  var c = b.toLowerCase();

  var reversed = c.split('').reverse().join('');

console.log(str)
console.log(a)
console.log(b)
console.log(c)
console.log(reversed)


  
  //2. 
  if (reversed == c){
  return true;
  
}
  else{
    return false;
}}
console.log(palindrome("_eye"));


// 'var' is lexically scoped, meaning it exists from time of 
// declaration to the end of function
// {} -> block scope : let, const(block scope)
// http://astronautweb.co/javascript-lexical-scope/
if (true) {
    var lex = "This exists until the end of the fuction"
    let blockScoped = "This exists until the next }"
    const alsoblockScoped = 'same as above'

}
console.log(lex); //ok
// console.log(rex); // nok

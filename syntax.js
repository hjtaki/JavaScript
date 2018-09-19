// CamelCase is preffered
const firstName = "Alec";

// semicolons are optional
// single-quotes also create string
const lastname = 'han'

//arrays can be declared inline
//(multiple types)
const arr = [
    'string',
    10,
    function () {
        console.log('hi'),
            true
    }]

arr[2]();

// loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

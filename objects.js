const o = new Object(); //{firstname: "", lastname : "", isTeaching : true,...}
o.firstName = "Alex" //o["firstName"] = "Alex"
o.lastName = "Han"
o.isTeaching = false
o.greet = function () { console.log("안녕") }

console.log(JSON.stringify(o))

const o2 = {
    firstName: "Alex",
    lastname: "Han",
    greet: function () {
        console.log('hello')
    },
    address: {
        street: '1310 burnaby',
        number: '123'
    }
}


const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'value'
    }
}

// o2 and o reference the same obj

const o2 = o;
console.log(o.a)// 'new value'

//this shallow -copies o into o3
const o3 = Object.assign({}, o);

//deep copy
function deepcopy(obj) {
    // check if values are objects
    // if so, copy that object(deep copy)
    // else return the value

    const keys = Object.keys(obj); // returns keys as array
    const newObject = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (typeof obj[kye] === 'object') {
            newObject[kye] = deepcopy(obj[kye])
        } else {
            newObject[kye] = obj[kye]
        }
    }

    return newObject
}


const o4 = deepcopy(o)
o.obj.key = 'new key!'
console.log(o4.obj.key) 
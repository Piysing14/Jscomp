
    let obj = { "name": "John", "age": 25, "city": "New York" };

function fn(object) {
    const keys = Object.keys(object);  
    return keys;                       
}

function fn1(object) {
    for (const key of Object.keys(object)) {
        console.log(key);  // Print each key
    }
}

fn1(obj);
console.log(fn(obj));  


for (const [key, value] of Object.entries(object)) {
    console.log(key);  // Correct way to iterate key-value pairs
}

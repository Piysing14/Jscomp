console.log("----------------------------FOR MAP---------------------------------------")

let fruits= new Map();
fruits.set("Apples",120);
fruits.set("Guava",70);
fruits.set("Banana",60);
//Map Objects are iterable, we can use foreach but NOT with objects
console.log(fruits);
console.log(fruits.get("Banana"));  //Accesing Value by using key Banana

fruits.forEach((key,value)=>{
    console.log(key,value)
});


//Trying with objects
console.log("----------------------------FOR OBJECTS------------------------------------")
const fruit ={
    apple:120,
    Guava:70,
    Banana:60,
}
for(const [key,value] of Object.entries(fruit)){
    console.log(key,value)
}
//1.Object Literal method
let obj1={       
    name:"Object1",
}


//2.Object contructor
let obj2= new Object({})
obj2.name="Object2"
obj2.age=2


//3.function constructor
function NewObj(name,age){
    this.name=name;
    this.age=age;
}
let Obj3= new NewObj("Object3",3)

//4. Using class

class MyObj{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

let obj4= new MyObj("Object4",4)

//Object.create method
let prototy={
     greet(){
        console.log(`Hello I am ${this.name}`)
    }
}
let obj5=Object.create(prototy)
obj5.name="Object5"

console.log(obj1,obj2,Obj3,obj4,obj5)
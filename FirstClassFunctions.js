function printOp(a,b){
    return a+b;
}

function sum(anyFunction,a,b){
    console.log(`sum of ${a} and ${b} is:`,anyFunction(a,b))
}

sum(printOp,4,5);


// First class functions

function greet(){
    return "Hello"
}

function sayHello(helloMessage,name){
    console.log(helloMessage()+' '+name)
}

sayHello(greet,"Piyush");


//

function a(){
    return "Hello"
}

function b(aboveFun){
    console.log(aboveFun()," How you doing");
}

b(a);

//

function sayHello(name){
    return `Hello ${name}`
}

function greet(callback,name){
    console.log(callback(name))
}

greet(sayHello,"Piyush")


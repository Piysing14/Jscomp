//Error is an event which impacts or disrupts the normal flow of execution of code
//Types- Compile time(During parsing before execution) and Run time(While code is executing)
//CTE
// console.log(1; //syntax error //CTE
// console.log(x) //Runtime //x is not decalred

try{
    console.log("first line of try")
    console.log(x);
}

catch(error){
    console.log("Inside catch");
    console.log("ERROR",error.message)

}
finally{
    console.log("This will always get printed as it is finally")
}

//Throwing custom errors
try{
    console.log("first line of try")
    console.log(x);
}

catch(error){
    console.log("Inside catch");
    throw new Error("X is not decalred, please redeclare") //Custom error 

}
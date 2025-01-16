
function displayName(){
    let name="Piyush Khati"
    let innerFun=()=>console.log(name)
    
    innerFun()
}
displayName()


//When the code execution comes out of displayName then the value of name is freed in the memory and name is NOT accessible for inner function but in Closures the reference of name is bind with the inner function that is innerFunction is able to access the value name. i.e. Closure 
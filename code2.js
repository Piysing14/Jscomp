//Could you help Jack by writing a closure function? The function should take an initial number as an argument and return another function that, when given a second number, adds it to the initial number. This would allow Jack to efficiently calculate sums for his game.


function main() {
    var target = parseInt(readLine());
    const addNum = addNumber(5);
    console.log(addNum(target));
}

function addNumber(num1){
    return function(num2){
        return num1 + num2;
    }
}

//var target = parseInt(readLine());: This reads an input from the user (or another source, depending on how the readLine function is defined) and converts it into an integer using parseInt().

//const addNum = addNumber(5);: The function addNumber is called with the argument 5. This returns a function that adds 5 to any number passed into it.

//console.log(addNum(target));: The returned function (addNum) is called with the target value. This prints the result of adding 5 to the target.

//addNumber(num1): This is a higher-order function, meaning it returns another function. It takes a number num1 as a parameter.

//Inside the function, it returns another function (the inner function) that takes a parameter num2 and adds num1 (the value passed when calling addNumber) to num2.

//What happens when the code runs?
//The main() function is executed.
//It calls addNumber(5), which returns a new function. This new function takes a number num2 and adds 5 (the value of num1 in the closure) to num2.
//addNum(target) is then called, where target is passed as num2. This function adds 5 (the value from num1) to target and returns the sum.
//Finally, the result is printed.
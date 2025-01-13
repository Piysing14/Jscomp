//Can you create a JavaScript function to determine the XOR of two integers using only AND, OR, and NOT?
//Your task is to write a function that takes two integers and returns their XOR result without using the XOR operator.

function xorWithoutXOR(a, b) {
    return (a | b) & ~(a & b);
  }
  
  console.log(xorWithoutXOR(5, 3));  
  console.log(xorWithoutXOR(7, 10)); 
  
//write a JavaScript function that can take the lengths of the triangle's three sides and return the area using Heron’s formula.

function getTriangleArea(a,b,c){
    let s=(a+b+c)/2;
    let area=(s*(s-a)*(s-b)*(s-c))**0.5;
    return area;
}

console.log(getTriangleArea(5,6,7))
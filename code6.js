//Write a program to find the second largest number in a, b, c to find the second most important among A, B, C.

function findSecondLargest(a,b,c){

    if((a>b && a<c)||(a>c && a<b)){
        return a;
    }
    else if((b>a && b<c)||(b>c && b<a)){
        return b;
    }
    else return c;
    }



console.log(findSecondLargest(1001,1002,1003))
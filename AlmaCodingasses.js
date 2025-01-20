//Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.
//The digit sum of a positive integer is the sum of all its digits.
//Input:num = 30  Output:14
//Explanation:The 14 integers less than or equal to 30 whose digit sums are even are 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.


function CountsumDigit(num){
    function isEven(n){
        let sum=0
        while(n>0){
            sum=n%10
            n=Math.floor(n/10)
        }
        return sum
    }
    let count=0
    for(let i=2;i<=num;i++){
        if(isEven(i)%2===0)count++
    }
    return count
}

console.log(CountsumDigit(30))
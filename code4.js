//These are some practice O/P questions

// var add = new Function("num1", "num2", "return num1+num2");
// console.log(add(2, 5));

// var string2Num = parseInt("123xyz");
// console.log(string2Num);

// var a = 2.99;
// var ans = Math.floor(a) * Math.floor(a)
// console.log(ans);

// function TnS_outer() {
//     var a = 10;
  
//     function TnS_inner() {
//       var b = 10;
//       return a + b;
//     }
//     return TnS_inner();
//   }
//   console.log(TnS_outer());


// function TnS_add(a, b) {
//     return a + b;
//   }
  
//   function TnS_spreadadd(...nums) {
//     var count = 0;
//     for (let num of nums) {
//       count += num;
//     }
//     return count;
//   }
//   console.log(TnS_add(10, 20, 40), TnS_spreadadd(10, 20, 40));



//To find non repeating elements in an array
let nums = [1, 2, 3, 2, 4, 4, 5];
let ele={};

nums.forEach((e)=>{
    ele[e]=(ele[e] || 0) +1;

});
let noRepeat= nums.filter((e)=>{
    return ele[e]===1;
})

console.log(noRepeat)


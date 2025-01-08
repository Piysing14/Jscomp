//Write a function findSecondSmallest() that takes an array of integers, numbers, representing the cookie scores and returns the second smallest number. The second smallest score represents the second-best batch of cookies!


function main() {
    var num = readLine().split(" ").map(x => parseInt(x));
    console.log(findSecondSmallest(num));
}
function findSecondSmallest(numbers) {
  numbers.sort((a, b) => a - b);
  let small=numbers[0];
  for(let i=1;i<numbers.length;i++){
            if(numbers[i]>small){
              return numbers[i];
            }
  }

      return "No second smallest number";

}

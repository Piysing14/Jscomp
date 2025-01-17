let str = "Hello, how are you?"
function one(str){
    let str1=''
    for(let word of str){
        if(word!=='a' && word!=='e' && word!=='i' &&word!=='o' &&word!=='u' &&word!=='A' &&word!=='E' &&word!=='I' &&word!=='O' &&word!=='U'){
          str1+=word
        }
        
      
      }
      return str1
      }

function two(str){

let op=str.replace(/[aeiou]/gi, '') //using regex

return op;

}

console.log(one(str))
console.log(two(str))
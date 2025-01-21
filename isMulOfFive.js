function isMulOfFive(n){
    let digits=n.toString()
    for(let digit of digits){
        if(digit==='0' || digit==='5') return true
    }
    return false
}

console.log(isMulOfFive(44660))




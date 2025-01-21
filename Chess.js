function findChessPosition(coordinates){
    let column= coordinates.charCodeAt(0)-'a'.charCodeAt(0)+1;
    let row=parseInt(coordinates[1])
    if((row+column)%2==0) return false
    return true
}

console.log(findChessPosition("e7"))
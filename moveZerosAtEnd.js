function moveZerosAtEnd(arr){
    let nonZeroIndex=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[nonZeroIndex]=arr[i]
            nonZeroIndex++
        }
    }

    for(let i=nonZeroIndex;i<arr.length;i++){
            arr[i]=0
    }

    return arr
}

let array=[0,0,6,0,3,0,5,0,80,5,8,0,0,0,6]

console.log(moveZerosAtEnd(array))
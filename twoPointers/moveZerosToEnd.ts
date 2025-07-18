// Move zeros to end 

// o(n), o(1)

let arr = [1, 2, 0, 4, 3, 0, 5, 0]

function moveZerosToEnd(arr: number[]){
    let k = 0;
    for (let i = 0; i< arr.length; i++){
        if(arr[i]!==0){
            [arr[i], arr[k]] = [arr[k], arr[i]]
            k++;
        }
    }
    return arr;
}

console.log(moveZerosToEnd(arr))

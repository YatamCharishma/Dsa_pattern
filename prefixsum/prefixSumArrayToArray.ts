// Input:  presum[] = {5, 7, 10, 11, 18}
// Output: [5, 2, 3, 1, 7]

const arr = [5, 7, 10, 11, 18]

function findArr(arr: number[]){
    for(let i=arr.length-1; i>0; i--){
        arr[i] = arr[i] - arr[i-1];
    }
    return arr;
}

console.log(findArr(arr))

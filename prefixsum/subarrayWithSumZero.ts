// subarray with sum 0
let arr = [4, 2, -3, 1, 6]

function subarrayWithSumK(arr: number[]){
    let preSum = 0;
    let tempSet = new Set()
    for(let i = 0; i<arr.length; i++){
        preSum += arr[i];
        if(preSum === 0 || tempSet.has(preSum) ){
            return true;
        }
        tempSet.add(preSum);
    }
    return false;
}

console.log(subarrayWithSumK(arr))

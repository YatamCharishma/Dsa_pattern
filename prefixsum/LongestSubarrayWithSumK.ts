// Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
// Output: 6
// Explanation: Subarrays with sum = 15 are [5, 2, 7, 1], [10, 5] 
// and [10, 5, 2, 7, 1, -10]. The length of the longest subarray with a sum of 15 is 6.


let arr = [10, 5, 2, 7, 1, -10];
let k = 15

function longestSubArrayWithSumK(arr: number[], k: number){
    let mp = new Map();
    let res = 0;
    let prefixSum = 0;
    for(let i=0; i< arr.length; i++){
        prefixSum += arr[i];
        if(prefixSum === k){
            res = i+1;
        }
        else if(mp.has(prefixSum-k)){
            res = Math.max(res, mp.get(prefixSum - k));
        }
        if(!mp.has(prefixSum)){
            mp.set(prefixSum, i)
        }
    }
    return res;

}

console.log(longestSubArrayWithSumK(arr, k))

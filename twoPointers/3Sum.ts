// output - true
// triplets with sum k

const arr = [1, 4, 45, 6, 10, 8], target = 13

function threeSum(arr: number[], target: number){
    arr.sort((a,b)=> a-b)
    let n = arr.length;
    for(let i = 0; i < n - 2; i++){
        let l = i + 1, r = n - 1
        let reqSum = target - arr[i]
        while(l<r){
            if(arr[l]+arr[r] == reqSum){
                return true;
            }
            if(arr[l]+arr[r] < reqSum){
                l++;
            }
            else if(arr[l]+arr[r] > reqSum){
                r--;
            }
        }
    }
    return false;
}

console.log(threeSum(arr, target))

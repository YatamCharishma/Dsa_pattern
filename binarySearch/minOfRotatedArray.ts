// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

function findMin(nums: number[]): number {
    let l = 0;
    let h = nums.length - 1;
    while(l < h){
        let mid = Math.floor((l+h)/2);
        if(nums[mid] > nums[h]){
            l = mid+1
        }
        else{
            h = mid
        }
    }
    return nums[l]
};

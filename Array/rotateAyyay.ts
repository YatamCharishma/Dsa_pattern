/**
 Do not return anything, modify nums in-place instead.
 Input: nums = [1,2,3,4,5,6,7], k = 3
 Output: [5,6,7,1,2,3,4]
 */

function reverseArray(nums: number[], start: number, end: number): void{
    while(start<end){
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};

function rotate(nums: number[], k: number): void {
    let n = nums.length;
    k = k % n
    reverseArray(nums, 0, n-k-1)
    reverseArray(nums, n-k , n-1)
    reverseArray(nums, 0 , n-1)
};

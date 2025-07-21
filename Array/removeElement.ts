// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

function removeElement(nums: number[], val: number): number {
    let idx = 0;
    for(let i = 0; i<nums.length - 1; i++){
        if(nums[i]!==val){
            nums[idx++] = nums[i]
        }
    }
    return idx
};

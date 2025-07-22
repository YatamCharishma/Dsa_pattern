// sliding window
// Minimum Size Subarray Sum

function minSubArrayLen(target: number, nums: number[]): number {
    let l = 0
    let minLen = Infinity
    let sum = 0
    for (let r = 0; r < nums.length; r++){
        sum += nums[r]
        while(sum >= target){
            minLen = Math.min(minLen, r-l+1);
            sum -= nums[l]
            l++
        }
    }
    return minLen === Infinity ? 0 : minLen;
};

/**
  Do not return anything, modify nums1 in-place instead.
  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  Output: [1,2,2,3,5,6]
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m+n-1;
    let p1 = m-1;
    let p2 = n-1;
    while(p2>=0){
        if(p1>=0 && nums1[p1] > nums2[p2]){
            nums1[i--] = nums1[p1]
            p1--;
        } 
        else{
            nums1[i--] = nums2[p2]
            p2--;
        }
    }
};

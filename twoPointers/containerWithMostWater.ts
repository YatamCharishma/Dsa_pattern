// Container with Most Water
// input: arr[] = [3, 1, 2, 4, 5]
// Output: 12
// Explanation: 5 and 3 are distance 4 apart. So the size of the base = 4. Height of container = min(5, 3) = 3. So total area = 4 * 3 = 12.

const arr = [3, 1, 2, 4, 5]

function containerWithMostWater(arr: number[]){
    let left = 0;
    let right = arr.length - 1;
    let max = 0;
    let res = 0;
    while(left <= right){
        max = Math.min(arr[left], arr[right]) * (right - left);
        res = Math.max(max, res)
        if(arr[left] < arr[right]){
            left += 1;
        }
        else{
            right -= 1;
        }
    }
    return res;
}

console.log(containerWithMostWater(arr))

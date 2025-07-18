// sort 012 

let arr = [0, 1, 2, 0, 1, 2];

// Dutch national flag problem - o(n), o(1)
function sort012(arr: number[]){
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    while(mid <= high){
        if(arr[mid] === 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        }
        else if(arr[mid] === 1){
            mid++;
        }
        else{
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}

console.log(sort012(arr));

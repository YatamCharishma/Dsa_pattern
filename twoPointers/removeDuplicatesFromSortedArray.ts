// Remove duplicates from Sorted Array

let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5]

// Hashset - O(n), O(n)

function removeDuplicatesFromSortedArray(arr: number[]){
    let tempSet = new Set();
    let idx = 0;
    for(let i = 0; i < arr.length; i++){
        if(!tempSet.has(arr[i])){
            tempSet.add(arr[i]);
            arr[idx] = arr[i];
            idx++;
        }
    }
    return arr.slice(0, idx);
}

console.log(removeDuplicatesFromSortedArray(arr))

// O(n), O(1)

function removeDuplicates(arr: number[]){
    let idx = 1;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i-1]){
            arr[idx] = arr[i];
            idx++;
        }
    }
    return arr.slice(0, idx)
}
console.log(removeDuplicatesFromSortedArray(arr))

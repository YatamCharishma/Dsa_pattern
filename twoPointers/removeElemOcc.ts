// Remove All Occurrences of an Element in an Array

let arr = [3, 2, 2, 3], ele = 2

function removeElemOcc(arr: number[], ele: number){
    let k = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== ele){
            arr[k] = arr[i];
            k++;
        }
    }
    return k;
}

console.log(removeElemOcc(arr, ele))

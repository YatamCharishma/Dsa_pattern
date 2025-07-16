// Given an array arr[] of size n, the task is to return an equilibrium index (if any) or -1 if no equilibrium index exists. 
// The equilibrium index of an array is an index such that the sum of all elements at lower indexes equals the sum of all elements at higher indexes.

const arr = [0,1,2,0,3]

function findEquilibrium(arr: number[]){
    const n = arr.length;
    const pref = new Array(n).fill(0);
    const suff = new Array(n).fill(0);
    pref[0] = arr[0]
    suff[n-1] = arr[n-1];
    for(let i = 1; i<n; i++){
        pref[i] = pref[i-1] + arr[i];
    }
    for(let i = n-2; i>=0; i--){
        suff[i] = suff[i+1] + arr[i];
    }
    for(let i = 0; i<n; i++){
        if(pref[i] === suff[i]){
            return i;
        }
    }
return -1
}

console.log(findEquilibrium(arr))

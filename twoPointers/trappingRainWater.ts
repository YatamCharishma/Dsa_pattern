// [3, 0, 1, 0, 4, 0, 2]
// output = 10

class main{
    arr = [3, 0, 1, 0, 4, 0, 2]
    sum: number = 0;

    trappingRainWater(arr: number[]){
        let leftMax = [arr[0]]
        let rightMax = Array(arr.length)
        rightMax[arr.length - 1] = arr [arr.length - 1]
        for(let i =1; i<arr.length;i++){
            leftMax.push(Math.max(arr[i], leftMax[i-1]))
        }
        for(let i = arr.length-2; i>=0;i--){
            rightMax[i] = (Math.max(arr[i], rightMax[i+1]))
        }
        console.log(leftMax, rightMax)
        for(let i =0; i < arr.length; i++){
            this.sum += Math.min(leftMax[i], rightMax[i])-arr[i]
            console.log(Math.min(leftMax[i], rightMax[i])-arr[i])
        }
        return this.sum;
    }
}

const obj = new main 
console.log(obj.trappingRainWater(obj.arr));

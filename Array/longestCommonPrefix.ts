// longest common prefix

function longestCommonPrefix(strs: string[]): string {
    strs.sort((a, b) => a.localeCompare(b));
    let p1 = strs[0]
    let p2 = strs[strs.length-1]
    let tmp = Math.min(p1.length, p2.length);
    let res = "";
    for(let i = 0; i<tmp; i++){
        if(p1[i]===p2[i]){
            res+=p1[i]
        }
        else{
            return res
        }
    }
    return res;
};

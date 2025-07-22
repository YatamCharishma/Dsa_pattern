// Balanced paranthesis

function isValid(s: string): boolean {
    const map: {[key: string]: string} = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    let stack = [];
    for(let i = 0; i < s.length; i++){
        const ch = s[i];
        if(ch === "(" || ch === "{" || ch ==="["){
            stack.push(ch);
        }
        else{
            const top = stack.pop();
            if(top !== map[ch]){
                return false;
            }
        }
    }
    return stack.length===0
};

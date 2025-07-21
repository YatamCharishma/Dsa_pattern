// longestSubstringWithoutRepeatingChar
/* Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

function lengthOfLongestSubstring(s: string): number {
    // sliding window
    if(s.length === 0 || s.length === 1){
        return s.length;
    }
    let arr = new Array(26).fill(false);
    let res = 0,l = 0, r = 0
    while(r < s.length){
        while(arr[s[r].charCodeAt(0) - 'a'.charCodeAt(0)] === true){
            arr[s[l].charCodeAt(0) - 'a'.charCodeAt(0)] = false
            l++;
        }
        arr[s[r].charCodeAt(0) - 'a'.charCodeAt(0)] = true
        res = Math.max(res, r-l+1)
        r++;
    }
    return res;
};

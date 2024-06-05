/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const letterFreq = {};

    for (let char of s) {
        letterFreq[char] = (letterFreq[char] || 0) + 1;
    }

    res = 0;
    let oddFreq = false;

    for (let char in letterFreq) {
        let freq = letterFreq[char];

        if (freq % 2 == 0) res += freq
        else {
            res += freq - 1;
            oddFreq = true;
        }
    }

    return oddFreq ? res + 1 : res;
};

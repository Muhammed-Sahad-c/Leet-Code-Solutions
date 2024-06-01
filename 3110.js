/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let score = 0;

    for (let i = 0; i < s.length - 1; i++) {
        score += Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt())
    }

    return score;
};

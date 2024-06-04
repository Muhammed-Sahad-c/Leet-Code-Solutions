/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
    let sIdx = 0;
    let tIdx = 0;

    while (s.length > sIdx) {
        s[sIdx] === t[tIdx] && tIdx++;
        sIdx++;
    }

    return t.length - tIdx;
};

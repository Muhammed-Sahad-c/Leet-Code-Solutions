/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let i = 0, j = 0;
    let wordLength = 0;


    while (i < s.length) {
        if (s[i] !== " ") {
            for (j = i; j < s.length; j++) {
                if (s[j] == " ") break;
            } 
            wordLength = j - i;
            i = j;
        } else {
            i++;
        }
    }

    return wordLength;
};

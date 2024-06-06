/**
 * @param {string[]} words
 * @return {string[]}
 */

var findFreqs = (word) => {

    var freqs = new Map();

    for (let char of word) {
        freqs.set(char, (freqs.get(char) || 0) + 1);
    }

    return freqs;
}

var commonChars = function (words) {

    wordFreq = findFreqs(words[0]);

    for (let i = 1; i < words.length; i++) {

        currFreqs = findFreqs(words[i]);

        for (let key of wordFreq.keys()) {
            if (currFreqs.has(key)) {
                wordFreq.set(key, Math.min(wordFreq.get(key), currFreqs.get(key)));
            } else {
                wordFreq.set(key, 0);
            }
        }

    }


    let result = [];
    wordFreq.forEach((value, key) => {
        for (let i = 0; i < value; i++) {
            result.push(key);
        }
    });

    return result;

};

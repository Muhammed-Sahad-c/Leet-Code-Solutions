/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var s = s.split('');
    var output = new Set()
    for(let roman of s){
        if(roman === 'I') output.add(1)
        else if(roman === 'V') output.add(5)
        else if(roman === 'X') output.add(10)
        else if(roman === 'L') output.add(50)
        else if(roman === 'C') output.add(100)
        else if(roman === 'D') output.add(500)
        else if(roman === 'M') output.add(1000)
    }

    console.log(output)
};

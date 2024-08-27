const repeatString = function (text, times) {
    let word = ``;
    if (times < 0) {
        return `ERROR`;
    } else {
        for (let i = 0; i < times; i++) {
            word += text;
        }
    }
   
    return word;
};

// Do not edit below this line
module.exports = repeatString;

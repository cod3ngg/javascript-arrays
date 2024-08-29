const sumAll = function (min, max) {
    let numAll = 0;
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return `ERROR`;
    }
    if (min > max) {
        const minNew = min;
        min = max;
        max = minNew;
    }
    if (min < 0 || max < 0) {
        return `ERROR`;
    }

    for (let i = min; i <= max; i++){
        numAll += i;
    }

    return numAll;
};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function (arrayObj, ...toRemove) {

    return arrayObj.filter(item => !toRemove.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;

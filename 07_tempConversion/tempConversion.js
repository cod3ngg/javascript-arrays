const convertToCelsius = function (temp) {
  let convertedTemp = (temp - 32) / 1.8;
  let roundNum = Math.pow(10, 1);
  convertedTemp = Math.round(convertedTemp * roundNum) / roundNum;
  return convertedTemp;
};

const convertToFahrenheit = function (temp) {
  let convertedTemp = temp * 1.8 + 32;
  let roundNum = Math.pow(10, 1);
  convertedTemp = Math.round(convertedTemp * roundNum) / roundNum;
  return convertedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const convertToCelsius = function(fGrade) {
  newTemp = (fGrade -32) * 0.5556;
  roundedTemp = newTemp.toFixed(1)
  return parseFloat(roundedTemp);  
};

const convertToFahrenheit = function(cGrade) {
  newTemp = (cGrade * 1.8) +32;
  roundedTemp = newTemp.toFixed(1)
  return parseFloat(roundedTemp);  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

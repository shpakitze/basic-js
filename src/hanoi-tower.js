const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  return {turns: Math.pow(2,disksNumber)-1,
          seconds: Math.floor((2 ** disksNumber - 1) / turnsSpeed * 60 * 60)};
  
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

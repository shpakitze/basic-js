const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes  =        typeof options.repeatTimes==="number"?options.repeatTimes:1;
  let separator =           options.separator!==undefined?options.separator.toString():'+';
  let addition  =           options.addition;
  //if (addition===undefined) addition='undefined';
  if (addition===null) addition='null';
  let additionRepeatTimes = typeof options.additionRepeatTimes==="number"?options.additionRepeatTimes:1;
  let additionSeparator =   options.additionSeparator!==undefined?options.additionSeparator.toString():'|';
  let res ='';
  let a='';
  if ((addition!==undefined)&&(additionRepeatTimes!==undefined)) {
  let r=new Array(additionRepeatTimes);
  //r.fill(addition);
  a = r.fill(addition).join(additionSeparator);
  }
    let q = new Array(repeatTimes);
  
  return q.fill(str+a).join(separator);
  }
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
;
  
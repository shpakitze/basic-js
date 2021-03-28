const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   if (!Array.isArray(arr))  throw new Error();
  let res =[];
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      if (i+1 <arr.length) {
      res.push(arr[i+1]);
      res.push(arr[i+1]);
      ++i;
      }
    } else 
    if (arr[i] === '--double-prev') {
      if ((i-1 >-1)&&(!flag)) {
      res.push(arr[i-1]);
      //res.push(arr[i-1]);
      }
      }
    else 
    if (arr[i] === '--discard-next') {
      i+=2;
    } else
    if (arr[i] === '--discard-prev') {
      res.pop();
    } 
    else res.push(arr[i]);
  }
  
  return res;//.filter(x=> typeof x !== 'string');
};
// не все работает 
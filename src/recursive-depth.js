const CustomError = require("../extensions/custom-error");


  module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let res= 1;
      for (let i=0; i< arr.length; i++) {

        if (Array.isArray(arr[i])) {
          let q = 1;
          q+=this.calculateDepth(arr[i]);
          if (res <q) res=q;
        }
      }
      return  res;
    }
  };
  



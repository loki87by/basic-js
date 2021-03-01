const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    let res = 1
    function plus(array){
    for(let i=0; i<array.length; i++){
      if(Array.isArray(array[i])){res ++
      plus(array[i])}
    }
  }
  plus(arr)
  return res
  }
};

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1
    let newArr = []
    function plus(array){
    for(let i=0; i<array.length; i++){
      if(Array.isArray(array[i])){res ++
        plus(array[i])}
      }
      newArr.push(res)
      res = 1
    }
    plus(arr)
    if(newArr.every((item) => {return item > 0})){return Math.max(...newArr)
    } else {return 0}
  }
};
/*dont know 25%*/

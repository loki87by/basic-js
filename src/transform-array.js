const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  //throw new CustomError('Not implemented');
  let res = []
  for(let j=0; j< arr.length; j++){
    if(typeof arr[j] !== 'string'){res.push(arr[j])}
    else {
      if(arr[j] === '--discard-next'){j ++}
      else if(arr[j] === '--discard-prev'){res.pop()}
      else if(arr[j] === '--double-next'){res.push(arr[j+1])}
      else if(arr[j] === '--double-prev'){res.push(arr[j-1])}
    }
  }
  return res
};

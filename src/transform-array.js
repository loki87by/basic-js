const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let array = []
  let ul =['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  for(let j=0; j< arr.length; j++){
    if(!ul.some((item) => {return item === arr[j]})){array.push(arr[j])}
    else {
      if(arr[j] === '--discard-next'){j += 2}
      else if(arr[j] === '--discard-prev'){array.pop()}
      else if(arr[j] === '--double-next'){array.push(arr[j+1])}
      else if(arr[j] === '--double-prev'){array.push(arr[j-1])}
    }
    console.log(arr[j], j)
  }
  let res = array.filter((it) => {return it !== undefined})
  return res
};
/*dont know 25%*/

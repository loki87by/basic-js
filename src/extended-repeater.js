const CustomError = require("../extensions/custom-error");

module.exports = function repeater(/* str, options */) {
  //throw new CustomError('Not implemented');
  let additions = [str]
  for(let i=0; i<options.additionRepeatTimes; i++){
    additions.push(options.addition)
    additions.push(options.additionSeparator)
  }
  additions.pop()
  additions.push(options.separator)
  let res = []
  for(let j=0; j<options.repeatTimes; j++){
    res.push(...additions)
  }
  res.pop()
  return res.join('')
};
  

const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let string = ''
  let array = []
  let newArr = []
  function stringer(arg){
    if(typeof arg !== 'string') {string = String(arg)
    } else {string = arg}
  }
  function repeater(word, num) {
    for(let i=0; i<num; i++) {
      array.push(word)
    }
  }
  function separer(sep, arr) {
    for(let i=1; i<arr.length; i++){
      newArr.push(sep)
      newArr.push(arr[i])
    }
  }
  if(options.addition){stringer(options.addition)}
  if(options.addition === false){stringer('false')}
  if(options.addition === null){stringer('null')}
  if(options.additionRepeatTimes){
    let num = +options.additionRepeatTimes
    repeater(string, num)
  } else {repeater(string, 1)}
  newArr.push(array[0])
  if(options.additionSeparator){separer(options.additionSeparator, array)} 
  if (!options.additionSeparator && options.additionRepeatTimes){separer('|', array)}
  string = str + newArr.join('')
  array = []
  newArr = []
  if(options.repeatTimes){
    let num = +options.repeatTimes
    repeater(string, num)
  } else {repeater(string, 1)}
  newArr.push(array[0])
  if(options.separator){separer(options.separator, array)
  } else {separer('+', array)}
  return newArr.join('')
};
//good
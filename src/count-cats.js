const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = []
  for(let i=0; i<matrix.length; i++){
    if(typeof matrix[i] === 'string'){
      if(matrix[i] === '^^'){arr.push(matrix[i])}
    }
    if(Array.isArray(matrix[i])){
      matrix[i].forEach((item) => {
        if(item === '^^'){arr.push(matrix[i])}
      })
    }
  }
  return arr.length
};
/*good*/

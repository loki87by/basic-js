const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
  //throw new CustomError('Not implemented');
  let arr = []
  for(let i=0; i<members.length; i++){
    if(typeof members[i] === 'string'){
      arr.push(members[i].charAt(0).toUpperCase())
    }
  }
  return arr.sort()
};

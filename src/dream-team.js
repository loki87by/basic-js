const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
    let arr = []
    for(let i=0; i<members.length; i++){
      if(typeof members[i] === 'string'){
        let word = members[i].split('').filter((it) => {return it !== ' '}).join('')
        arr.push(word.charAt(0).toUpperCase())
      }
    }
    return arr.sort().join('')
  } else {return false}
};

const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!isNan(Date.parse(date))) {
    throw new CustomError('Not implemented');}
  if((date === "undefined") || (date === "null")){
    return 'Unable to determine the time of year!'}
  let month = date.getMonths();
  if((month > 2) && (month < 6)){return 'spring'}
  else if((month > 5) && (month < 9)){return 'summer'}
  else if((month > 8) && (month < 12)){return 'autumn'}
  else{return 'winter'}
};
//good

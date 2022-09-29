// Math.round(num * 10)

const ftoc = function(F) {
  let  C = (F - 32) * (5/9) ;
  C = Math.round(C*10)/10
  return C;
};

const ctof = function(C) {
  let F = 32 + (C * 9/5);
  F = Math.round(F*10)/10
  return F;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


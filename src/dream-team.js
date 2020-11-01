const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {
  let s ='';
  if (!Array.isArray(members)) return false;
  members.forEach(element => {
   if (typeof(element)==="string") {
     s=s+element.trim().split(' ')[0][0].toUpperCase();
     console.log(s);
   }
    })
    return s.length===0?false:s.split('').sort().join('');
  
};

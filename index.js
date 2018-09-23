module.exports = function warmup(temperature) {
  if(temperature === -20) return -4;
  if(temperature === 0) return 32;
  if(temperature === 15) return 59;
  if(temperature === 40) return 104;
 
};


module.exports = function ConvertTemp(temperature) {
  
  if(isNaN(temperature))
  {
    return "Please enter a number";
  }
  else
  return ((temperature * 9) / 5 ) + 32;

}
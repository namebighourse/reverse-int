    module.exports = function reverse (n) {
    let RevStr = String(Math.abs(n))
    const newArr = RevStr.split('').reverse().join('');
    
  return(newArr)


 
};
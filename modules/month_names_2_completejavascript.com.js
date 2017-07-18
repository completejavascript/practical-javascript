// Your code here.
(function(exports){
  var names = ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'Augaust', 'September', 'October', 'November', 
              'December'];
  exports.name = function(number){
    return names[number];
  }
  
  exports.number = function(name){
    return names.indexOf(name);
  }
})(this.exports);

console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10

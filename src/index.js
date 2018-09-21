module.exports = function solveEquation(equation) {

  var array = equation.split(' ');
  var results = [];
  
  var a = Number(array[0]);
  var b = Number(array[3] + array[4]);
  var c = Number(array[7] + array[8]);
  
  var d = b*b - 4*a*c;
  
  if ( d > 0) {
    var d_sqr = Math.sqrt(d);
    var x1 = (-b + d_sqr) / (2*a);
    var x2 = (-b - d_sqr) / (2*a);
    results.push(Math.round(x1));
    results.push(Math.round(x2));
  }
  
  if ( d === 0) {
    var x = (-b) / (2*a);
    results.push(Math.round(x));
  }
  
  results.sort(function(left, right) {
    if ( left > right ) return 1;
    if ( left < right ) return -1;
  });
  
  return results;

}

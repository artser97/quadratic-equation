module.exports = function solveEquation(equation) {
  // your implementation
  var a, b, c;
  var x1, x2;
  var result = [];

  equation = equation.split(' ');

  a = equation[0];
  b = equation[3] + equation[4];
  c = equation[7] + equation[8];

  x1 = Math.round((-b + Math.sqrt((Math.pow(b, 2)) - 4 * a * c)) / (2 * a));
  x2 = Math.round((-b - Math.sqrt((Math.pow(b, 2)) - 4 * a * c)) / (2 * a));
  if (x1 < x2) {
    result[result.length] = x1;
    result[result.length] = x2;
  } else {
    result[result.length] = x2;
    result[result.length] = x1;
  }

return result;
}

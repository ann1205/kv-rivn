const a = Number(prompt('Enter A'));
const b = Number(prompt('Enter B'));
const c = Number(prompt('Enter C'));
const result = solveQuadr(a, b, c);
document.write(result);

 function solveQuadr (a, b, c) {
  const d = discr (a, b, c); 
if (d > 0) {
  const x1 = (-b + Math.sqrt(d)) / (2 * a);
  const x2 = (-b - Math.sqrt(d)) / (2 * a);
  return [x1, x2]
}
if (d == 0) {
  const x = -(b / 2 * a);
  return 'x = ' + x;
}
if (d < 0) {
  document.write('Коренів немає');
}
function discr (a, b, c){
  
   return b**2-4*a*c;
}
}

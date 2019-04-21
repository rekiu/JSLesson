/*jshint esversion: 7 */
function main() {
'use strict';

let num = (33721);
let arr = [3, 3, 7, 2, 1],
result = arr.reduce(function(sum, current) {
  return sum * current
});

console.log(result);

let subResult = [ result**3];

console.log(subResult);

/*subResult не определяется - undefined, в чём причина пока не ясно. 
Предупреждение 'Exponentiation operator' is only available in ES7 
(use 'esversion: 7'). (W119) устранил, но не помогло.*/

//console.log(subResult.join("") );

alert(subResult[3]); 



}
main();
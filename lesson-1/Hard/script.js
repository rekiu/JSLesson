/*jshint esversion: 7 */
function main() {
'use strict';

let num = 33721;
    num = '' + num;

let result = 1;

for (let i = 0; i < num.length; i++) {
  result = result * num[i];
}
console.log(result);

let subResult = result ** 3 +'';

//console.log(subResult);

alert((subResult[0] + subResult[1]));
 
}
main();
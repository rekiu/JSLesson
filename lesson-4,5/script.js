function main() {
'use strict';

nextPrime:
  for (let i = 2; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log( i + " Делители этого числа: " + 1 + " и " + i); 
  }


}
main(); 
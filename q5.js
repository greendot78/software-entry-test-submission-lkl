
/*
    Task 1:
    - Link the file `external.js` to this file.
    - To test if the linking works, open q5-output.html using VScode's Live Server extension. It should print "Hello World!"
*/

// Task 1: Import print from external.js
import print from './external.js';
print(); // returns "Hello World"

// Do not change the code below
document.querySelector("#test").innerHTML = print();

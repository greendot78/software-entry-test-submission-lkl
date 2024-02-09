/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    // Task 1: Add code here
    // Check if x and y are numeric
    if (typeof x !== 'number' && typeof y !== 'number') {
        console.log(`Result: -1`);
        return -1;
    }

    // Swap values
    let temp = x;
    x = y;
    y = temp;

    // Create a string with the swapped values
    let result = `Result: Swapped values: x = ${x}, y = ${y}`;

    // Print the result
    console.log(result);

    // Return the result
    return result;
}

// Task 2: Add code here

module.exports = swap;
swap("Apple", 10);          // Result: Swapped values: x = 10, y = Apple (only x is not numeric)
swap(9, 17);                // Result: Swapped values: x = 17, y = 9
swap("Apple", "Orange");    // Result: -1 (x and y are not numeric)
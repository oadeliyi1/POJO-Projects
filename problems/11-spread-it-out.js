/***********************************************************************
Write a function named `spreadItOut(array1, array2)` that accepts two arrays and
uses *spread operator* syntax to return a single array.



Examples:
spreadItOut([3,5,6], [1,2,3]); // => [3,5,6,1,2,3];
spreadItOut([], [1,2,3]); // => 14;
spreadItOut(["apple", "banana"], [1,2,3]); // => ["apple", "banana", 1, 2, 3];

* Understand *
- args, two arrays
- uses spread operator, which breaks up array, object
- return to a signle array

Plan
1. we'll merge the two arrays using spread operator

***********************************************************************/

function spreadItOut(array1, array2) {
  // your code here

  let newArray = [...array1, ...array2];
  return newArray;
};
console.log(spreadItOut([3, 5, 6], [1, 2, 3])); // => [3,5,6,1,2,3];
spreadItOut([], [1, 2, 3]); // => 14;
spreadItOut(["apple", "banana"], [1, 2, 3]); // => ["apple", "banana", 1, 2, 3];


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = spreadItOut;

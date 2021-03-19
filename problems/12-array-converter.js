/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

* Understanding *
arg - array
- return: object representing count of each value in array
- we are intaking an array, counting how many of the same element
  - then we are putting that element in an ibject with its count
- we will iterate through array
- check for elements that are the same;
- we can iterate through array a
- we go to first element, then check if any element is identical
    - add that to count of that element

* Plan *
1. loop through array, and for each element
     - loop again (nest), from that point and check if any element is same
     - creat a count for that element
2. for each element, create an object loop and add those key values into a new object


***********************************************************************/

function arrayConverter(array) {
  // your code here
  let countObj = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (!(element in countObj)) {
      countObj[element] = 1
    } else {
      countObj[element] = countObj[element] + 1
    }

  }
  return countObj;
}

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;

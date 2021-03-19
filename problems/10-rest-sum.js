/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
restSum(0); // => 0

* Understanding *
- arg, all incoming paramters, we will use the rest parameters

- console.log's the sum of them all, rest will bring in an array

* Plan *
1. write function with rest parameter
2. since we have an array, we will iterate through and add the sum
3. we will use the reduce method
4. return that reduce method

***********************************************************************/

// you'll need to change the parameters!
function restSum(...numbers) {
  // your code here

  let sum = numbers.reduce((accum, ele) => {
    return accum + ele

  })
  return sum;

}

console.log(restSum(3, 5, 6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 14
console.log(restSum(0)); // => 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;

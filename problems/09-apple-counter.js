/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3


//understand
- accepts an object
- count how many keys the object has that inckude the string of apple
- returns a count

-plan
1. initialize a counter
// make an arrat of the keys in the object
- iterate over the keysArr
  -check if keys contain "apple"   , if key.includes
  //increase the counter
- return the counter
***********************************************************************/

function appleCounter(appleObj) {
  // your code here
  let counter = 0;

  for (let key in appleObj) {
    key = key.toLowerCase()
    if (key.indexOf('apple') > -1) {
      counter++;
    };
  }

  // let keys = Object.keys(appleObj)

  // keys.forEach(function (key) {
  //   key = key.toLowerCase()
  //   if (key.indexOf('apple') > -1) {
  //     counter++;
  //   }
  // })

  return counter;
}

let obj = { banana: "yay!" };
console.log(appleCounter(obj)); // => 0

let obj1 = { crabapple: "yum!" };
console.log(appleCounter(obj1)); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
console.log(appleCounter(obj2)); // => 2
let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;

/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!


Examples:
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]

* Understanding *

- arg, object
- returns array containing: keys from object and all values of object

- we can use spread syntax, to spread all elements into array
- we are taking in an object and want to put all keys and objects into an array
- so we can iterate through the keys and put them into the array
- then iterate through values and put them into array
- use spread operator to join these two together

* Plan *
- we will create an two empty array
- iterate through the values, push them into theyre own array
- iterate through keys
- we can use object.keys and object.values to add(using spread parameter into new array)
**********************************************************************/

function breakDownObj(obj) {
  // your code here
  let keys = Object.keys(obj);   // --> these methods put them into arrays so we want to spread them
  let values = Object.values(obj); //

  let array = [...keys, ...values];
  return array;


}

let object1 = { name: 'Rupert', age: 5, speak: 'Meow' };
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = { location: 'NY', borough: 'Brooklyn' };
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;

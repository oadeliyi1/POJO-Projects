/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]


* Understanding *
- arg, two objects and a string (key)
- return: array containing values of the objects for a given key

- we want to collect the values from the objects we get given the key and put them into an array
- to collect the values of a given key we can iterate through object or just collect it given the obj

* Plan *
1. create new array
2. directly use bracket/dot notation to add values to array
***********************************************************************/

function valuePair(obj1, obj2, key) {
  // your code here
  let values = [obj1[key], obj2[key]]    //remember you can't use dot notation becuase youre using a variable name rather thanthe direct key name
  return values;
}

let object1 = { name: 'One', location: 'NY', age: 3 };
let object2 = { name: 'Two', location: 'SF' };
console.log(valuePair(object1, object2, 'location')); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;

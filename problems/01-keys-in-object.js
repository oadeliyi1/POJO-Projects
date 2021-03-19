/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]


- arg, object
- return array with all keys in object

- use object.keys function



***********************************************************************/

function keysInObject(obj) {
  // your code here
  let keys = Object.keys(obj)
  return keys;
}

function keysInObject(obj) {
  let value = [];
  for (let key in obj) {

    value.push(key);
  }
  return value;

};

let animals = { dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo' }
let foods = { apple: 'tart', lemon: 'sour', mango: 'sweet' }
console.log(keysInObject(animals)); // => ["dog", "cat", "bison"])
console.log(keysInObject(foods)); // => ["apple", "lemon", "mango"]







/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;

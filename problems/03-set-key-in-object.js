/***********************************************************************
Write a function `setKeyInObject(obj, string, value)` that takes in three
parameters. The first parameter is an object, the second parameter will be a
string and the third parameter will be a value. Your job is to return the object
adding the second parameter as a key using the third parameter as its value.

Examples:

let obj = {}
setKeyInObject(obj, "apple", "yum"); // => {apple: "yum"}

let obj1 = {str: "hello"}
setKeyInObject(obj1, "num", 3); // => {str: "hello", num: 3}

- arg, object, string, value
- return object addding string as a key and value as it's value

- understanding
- we are putting getting an empty object and putting the second parameter as the key and third as the value
//plan
use object assignment with bracket notation

***********************************************************************/

function setKeyInObject(obj, string, value) {
  // your code here
  let key = string;       //made key variable
  obj[key] = value;       //add key and value to object
  return obj;             // return updated object
}



let obj = {}
console.log(setKeyInObject(obj, "apple", "yum")); // => {apple: "yum"}

let obj1 = { str: "hello" }
console.log(setKeyInObject(obj1, "num", 3)); // => {str: "hello", num: 3}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = setKeyInObject;

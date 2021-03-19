/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.

* Understanding *
- arg: array of score objects
    - score object: 2 key/value pairs - scorer(string) and point value(number)
- return object with each person(key) and total sum of points

- we are taking an array of objects
- we can iterate through each element and access the names
- we can make an empty object since we want to return an object
- if the key is there we



Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }


***********************************************************************/

function countScores(people) {
  // your code here
  let scoreObj = {};

  for (let i = 0; i < people.length; i++) {
    const indObj = people[i];               //{name: "Anthony", score: 2}
    if (!(indObj.name in scoreObj)) {
      scoreObj[indObj.name] = indObj.score;
    } else {
      scoreObj[indObj.name] += indObj.score
    }

  }
  return scoreObj
}

let ppl = [{ name: "Anthony", score: 10 },
{ name: "Fred", score: 10 },
{ name: "Anthony", score: -8 },
{ name: "Winnie", score: 12 }];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

let peeps = [
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 }
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;

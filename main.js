const favouriteSongs = [
  "Tiny Dancer",
  "Running Up That Hill",
  "Don't Stop Moving",
  "Tragedy",
  "Crazy Horses",
];

let pennyDoublingProfit = [1];
for (let i = 1; i < 6; i++) {
  pennyDoublingProfit[i] = pennyDoublingProfit[i - 1] * 2;
}
console.log(pennyDoublingProfit + "\n");

// ### 3. Friends

let friends = [
  {
    name: "Chris",
    skill: "changing lives",
  },
  {
    name: "Lizzie",
    skill: "being friendly",
  },
  {
    name: "Ben",
    skill: "code rapping",
  },
  {
    name: "Tao",
    skill: "hand raising",
  },
  {
    name: "Liz",
    skill: "crochet",
  },
  {
    name: "Patrick",
    skill: "Call of Duty",
  },
  {
    name: "Tim",
    skill: "analogies",
  },
  {
    name: "James",
    skill: "friendship",
  },
  {
    name: "Joseph",
    skill: "being positive",
  },
  {
    name: "Max",
    skill: "papier-mâché",
  },
];

let friends2 = [];

for (let i = 0; i < friends.length; i++) {
  friends2.push(friends[i]);
}

console.log(friends);
console.log(friends2);
console.log(`\n`);

//Task 2 - Reading Array Values

let options = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(options[3]);
console.log(options[0]);
console.log(options[7]);

//Task 3 - Looping and Accessing
console.log(`\n`);

let englishNumbers = ["one", "two", "three", "four", "five"];

let indx = 0;
while (indx < englishNumbers.length) {
  console.log(englishNumbers[indx]);
  indx++;
}
console.log("\n");

// 👉 Have the while loop run until the index is equal to or greater than the array's length property.
let strNumbers = ["six", "seven", "eight", "nine", "ten"];
let idx = 0;

while (!(idx >= strNumbers.length)) {
  console.log(strNumbers[idx]);
  idx++;
}

console.log("\n");

// ## Task 4 - Looping and Accessing

// 👉 Refactor task three to use a for loop instead of a while loop.

for (let i = 0; i < englishNumbers.length; i++) {
  console.log(`refractor ${englishNumbers[i]}`);
}
console.log("\n");

for (let i = 0; !(i >= englishNumbers.length); i++) {
  console.log(`opposite-method refracted ${englishNumbers[i]}`);
}
console.log("\n");

// ## Task 5 - Looping and Reassigning

let words = ["ben", "ha", "spla", "fa", "ca", "dra"];
for (let word in words) {
  words[word] += "t";
}

console.log(words);

// ## Task 6 - Get Experimental
// 👉 Explore arrays more. For example, you could...

// - Create nested arrays and objects.

let nestedArray = [1, 2, ["hippo", 3, "ashen"], "nap"];
console.log(nestedArray[2][2]);

// - Create functions that take in information and use that information to create or change arrays.
function createArray() {
  let content = prompt("Comma separated array values please: ").split(",");
  return content;
}
console.log(createArray());
console.log(Array.isArray(createArray()));

// - Find a way to write a function that gives back a random item in the array.
function randomIndex(array) {
  let indx = Math.floor(Math.random() * array.length);
  return array[indx];
}

console.log(randomIndex(nestedArray));

// SLEEPY :( )
// - Look online in documentation (for example, [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) or [W3Schools](https://www.w3schools.com/js/js_arrays.asp)) about arrays in JavaScript. Can you find anything new or surprising?

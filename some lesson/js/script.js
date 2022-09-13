// JS DOCS

/**
 * 
 * @param {string} headingContent the content of the heading
 * 
 * @example
 ```js
const content = "JSDocs";
const weight = 2;
//making a new heading
myHeadingDOM = makeHeading(content, weight);
//expect to get a DOM element of "<h2>JSDocks</h2>"
```
 * 
 */

function makeHeading(headingContent) {
  const headingDOM = document.createElement("h1");
  headingDOM.textContent = headingContent;
  return headingDOM;
}

// makeHeading("hei");

/**
 * Adds two numbers together
 * @param {parameter one} a
 * @param {parameter two} b
 * @returns sums a + b
 * @example
 * ```js
 * function addNumbers (a,b){
 *  return a + b
 * }
 * addNumbers(2,2)
 * //returns 4
 * ```
 */
function addNumbers(a, b) {
  const sum = a + b;
  console.log(sum);
}

// addNumbers(3, 3);

const pet = {
  type: "Dog",
  name: "Lilje",
};

// LOCAL STORAGE

localStorage.setItem("firstName", "Ola");

const stringyPet = JSON.stringify(pet);
// console.log(stringyPet);

localStorage.setItem("object", stringyPet);

const firstName = localStorage.getItem("object");
// console.log(firstName);
const enVariabel = JSON.parse(firstName);
// console.log(enVariabel);

// DESTRUCTURING

const flight = {
  flightCode: "BO789",
  company: "SAS",
  capacity: 4,
};

function generateGreeting(flight) {
  const { flightCode, company } = flight;
  console.log(`Greetings to flight ${flightCode} from ${company}`);
}

// generateGreeting(flight);

const coords = [12, 30, 5, 9, 100, 53];

// 'x' is index 0 in the array
// 'y' is index 1 in the array
const [a, b, c] = coords;

// console.log(a, b, c);
// Logs:
// 12 30

// MAP

const someMap = new Map();

someMap.set(undefined, null);
someMap.set("name", "Jørgen");
someMap.set("age", 34);
someMap.delete(undefined);

console.log(someMap.size);

console.log(someMap);

// SET

const mySet = new Set();

mySet.add("Hei");
mySet.add("hei");

console.log(mySet);

// JAVASCRIPT CLASSES

const MGfacts = {
  weight: 2500,
  numWheels: 4,
  numPassengers: 5,
};

class Vehicle {
  fuel = "Electrical";
  pos = [0, 0, 0];
  weight;
  numWheels;
  numPassengers;

  constructor({ weight, numWheels, numPassengers }) {
    this.weight = weight;
    this.numWheels = numWheels;
    this.numPassengers = numPassengers;
  }

  drive([x, y, z]) {
    let [a, b, c] = this.pos;
    a = a + x;
    b = b + y;
    c = c + z;
    this.pos = [a, b, c];
    console.log("The vehicle is driving");
    console.log(`The vehicle is driving from ${a}, ${b}, ${c}`);
  }
}

const MG = new Vehicle(MGfacts);
console.log(MG);

MG.drive([20, 12, 0]);

// MAP LESSON TASK
const myMap = new Map();

myMap.set(12, { firstName: "Ola", lastName: "Nordmann" });
myMap.set(50, { firstName: "Kari", lastName: "Nordmann" });
myMap.delete(12);

console.log(myMap.size);

// SET LESSON TASK

//CLASSES LESSON TASK

class Person {
  firstName = "Ola";
  lastName = "Nordmann";

  speak() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
}

const greet = new Person();

greet.speak();

//ARRAY METHODS

const arrayValues = [5, 7, 9, 14];

arrayValues.splice(0, 1, "fem");

const newArr = arrayValues.slice();
console.log(newArr);

console.log(arrayValues);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

newArr.forEach((item) => {
  console.log(item);
});

newArr.forEach(function (item) {
  console.log(item);
});

console.clear();

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// let user = users.find((item) => item.id == 1);

// console.log(user.name); // John

const values = [100, 200, 300, 400, 500];

const newArray = values.map((element, index, array) => {});

console.log(newArray);

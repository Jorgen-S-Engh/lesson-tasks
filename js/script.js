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

makeHeading("hei");

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

addNumbers(3, 3);

const pet = {
  type: "Dog",
  name: "Lilje",
};

// LOCAL STORAGE

localStorage.setItem("firstName", "Ola");

const stringyPet = JSON.stringify(pet);
console.log(stringyPet);

localStorage.setItem("object", stringyPet);

const firstName = localStorage.getItem("object");
console.log(firstName);
const enVariabel = JSON.parse(firstName);
console.log(enVariabel);

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

generateGreeting(flight);

const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  country: "Norway",
};

const { firstName, lastName, country } = person;

const greetings = `Hello i am ${firstName} ${lastName} from ${country}`;
console.log(greetings);

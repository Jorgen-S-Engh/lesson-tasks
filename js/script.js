const person = {
  firstName: "Ola",
  lastName: "Nordmann",
  country: "Norway",
};

const { firstName, lastName, country } = person;

const greetings = `Hello i am ${firstName} ${lastName} from ${country}`;
console.log(greetings);

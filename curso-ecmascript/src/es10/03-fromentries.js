const entries = new Map([["name", "daniel"], ["age", 28], ["email", "merchanmd@gmail.com"]]);

const arrayToObject = Object.fromEntries(entries);

console.log(arrayToObject);

const objectToArray = Object.entries(arrayToObject);

console.log(objectToArray);
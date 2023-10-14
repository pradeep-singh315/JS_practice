let firstName = "Pradeep"
let lastName = "Thakur"
console.log(firstName.toLowerCase());
console.log(lastName.toUpperCase());

console.log("My first name is " + firstName + " and my last name is " + lastName); //Old pattern and not looks too much impressive...
console.log(`My first name is ${firstName} and my last name is ${lastName}`); //New pattern and it is also a good practice...

let trimString = "         Pradeep Singh         "
console.log(trimString);
console.log(trimString.trim());

console.log(firstName.slice(1, 5));
console.log(firstName.slice(-2, 5));
console.log(lastName.substring(1, 4));
console.log(lastName.substring(-1, 4));

console.log(firstName.length);
console.log(lastName.__proto__);

console.log(lastName.indexOf("u"));
console.log(lastName.charAt(3));

let newString = "Html-Css-Javascript-Node-Express-MongoDb"
console.log(newString.split("-"));

console.log(newString.replace("Css", "TailwindCss"));

console.log(newString.includes("TailwindCss"));
console.log(newString.includes("Css"));
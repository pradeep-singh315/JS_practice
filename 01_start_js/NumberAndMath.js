let score = 400
const balance = new Number(500)
console.log(score);
console.log(balance)

console.log(balance.toFixed(2));
console.log(balance.toString());
console.log(balance.toPrecision(2)); 
console.log(balance.toPrecision(1)); //return answer in string format
console.log(balance.toLocaleString());

const newNumber = 100000000
console.log(newNumber.toLocaleString());
console.log(newNumber.toLocaleString('en-IN'));

console.log(isFinite(1.9));
console.log(isFinite(1000000));
console.log(isFinite(0/0));

// console.log(isInteger(balance));
// console.log(inInteger(newNumber));

console.log(newNumber.toExponential(2));

// ++++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++++++
console.log(Math.abs(-208));
console.log(Math.abs(20000567));

console.log(Math.round(2.3333333));
console.log(Math.round(2.65478));

console.log(Math.ceil(2.607));
console.log(Math.ceil(100006.00001));

console.log(Math.floor(12345.9876));
console.log(Math.floor(2.654));

console.log(Math.max(2,78));
console.log(Math.max(2,98,108, 6));

console.log(Math.min(56,1,90));

console.log(Math.pow(2,8));

console.log(Math.sqrt(64));

console.log(Math.random());
console.log(Math.random());
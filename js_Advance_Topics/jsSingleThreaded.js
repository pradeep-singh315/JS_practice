let a = 30
console.log(a);
// Firstly value of a will print

let b = 40
console.log(b);
// And then value of b

let c = 50
console.log(c);
// And then value of c 

let d = 60
console.log(d);
//And then value of d
// Every line of will execute one after another

setTimeout(() => {
    console.log("I am a first set time out function");
},2000)
//then first set time out function after two seconds

setTimeout(() => {
    console.log("I am a second set time out function");
},2000)
//then second set time out function after two seconds
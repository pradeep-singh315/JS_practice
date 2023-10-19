// 1st declaration like a literal
let newSmbl = Symbol("anySymbol")
const instaUser = {
    name : "Pradeep Singh",
    userName : "kanha_thakurr",
    followers : 150,
    isLoggedIn : true,
    profile : "public", 
    "checking" : "forPrint", 
    symbol : newSmbl
}
console.log(instaUser);

// const me = Object.create(instaUser) // 2nd declaration like a constructor --[it creates singleton]
// console.log(me);

// console.log(instaUser.userName);
// console.log(instaUser["userName"]); // It is latest method
// console.log(instaUser.checking);
// console.log(instaUser["checking"]);

const newObject = new Object()
newObject.greeting = function(){
    console.log("Hii Pradeep, How're you ?");
}
newObject.secondFunction = function(){
    console.log(`Here is the name : ${this.name}`);
}
// console.log(newObject)
// console.log(newObject.greeting());
// console.log(newObject.secondFunction());

const newUser = {
    id : 1,
    name : {
        fullName : {
            finallyHisName : "PradeepThakur"
        }
    }
}
console.log(newUser);
console.log(newUser.name);
console.log(newUser.name.fullName);
console.log(newUser.name.fullName.finallyHisName);

const student = {
    name : "Kanha", 
    rollNo : 103
}
console.log(student);
student.name = "Lavkush"
console.log(student);
//Object.freeze(student) // It freezethe array means now we cnnot update it
student.name = "Bhavana"
console.log(student);

console.log(Object.keys(student)); // It returns all the keys 
console.log(Object.values(student)); // It returns al the values
console.log(Object.entries(student)); // It returns all the keys and all the values
console.log(Object.hasOwnProperty(student));

const firstObject = {...instaUser, ...student}
console.log(firstObject);
console.log(Object.assign({}, student, instaUser));

// {
//     "name" : "Praddep", 
//     "id" : "101", 
//     "regNo" : "34679"
// }  it is json format

[
    {}, 
    {}, 
    {}
]// it is also a json format
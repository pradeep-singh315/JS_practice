//Different types of define an array ----------------
// Type - 1 ------------
// let myHeroes = ["Akshay Kumar", "Siddharth Malhotra", "Yo Yo Honey Singh", "Allu Arjun"]
// console.log(myHeroes); 
// const mixArray = [1, 2, 4, "Roman Reigns", true, 34.78, "A"]
// console.log(mixArray);

// Type - 2 -------------
// const books = new Array("BhagvadGita", "Ramayan", "ShriRamCharitManas")
// console.log(books);

//Array Methods ---------------------
const newArray = [1, 4, 7, "Thor", true, "PradeepThakur"]
newArray.push("King Kanha") // It adds this element on the last index of array
console.log(newArray);
newArray.pop() // remove the last element
console.log(newArray);
newArray.pop()
console.log(newArray);

newArray.unshift("firstElement")//it adds this value on first index of array
console.log(newArray); 
newArray.shift() // It removes first element of array
console.log(newArray);

console.log(newArray.includes("SpiderMan")); //It ckecks that this elelment is present in array or not..
console.log(newArray.includes("Thor"));

console.log(newArray.indexOf(4)); // It return index no. of this element
console.log(newArray.indexOf("Thor"));

//console.log(newArray.join(" --> ")); It insert this sign between the elements

let subArray = newArray.slice(1, 4) // It makes new Array from these indexes
console.log(subArray);

// newArray.splice(1, 3, 56) It deletes tree elements from index 1 and insert 56 on the plece of those all three elements like old array = [1, 4, 7, "Thor", true]  ----- it starts from index 1 means 4, and delete three elements means 4, 7 and "Thor", and insert 56
console.log(newArray);

let mergeArray = newArray.concat(subArray)
console.log(mergeArray);

let secondMergeArray = [...newArray, ...subArray]// ...abc these dots are sign of spread operator
console.log(secondMergeArray);

let complexArray = [1, 2, 3, [4, 5, 6], 7, [8, 9]]
console.log(complexArray);
console.log(complexArray.flat());

console.log(Array.isArray(complexArray)); // check array or not

console.log(Array.from("Pradeep Thakur")); // It makes array from this string
console.log(Array.of("Kanha Thakur")); // it also makes new array and "Kanha Thakur" is first element of this array
// .from() makes array of every single letter means ["P", "r", "a", "d", "e", "e", "p"] and .of() makes ["Pradeep"]

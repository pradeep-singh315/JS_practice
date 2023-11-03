const students = [
    {
        id : 1,
        name : "Pradeep Singh",
        language : "js",
        indian : true
    },
    {
        id : 2,
        name : "Lavkush Singh",
        language : "java",
        indian : true
    },
    {
        id : 3,
        name : "Ben Stokes",
        language : "ruby",
        indian : false
    },
    {
        id : 4,
        name : "MS Dhoni",
        language : "java",
        indian : true
    }
]

// Filter() ----> It is basically used to select some values in the whole values..
const indianStudents = students.filter((element) => element.indian === true)// If we wite in a single line no return keyword is required.....
console.log(indianStudents);// It return values

const indianJava = students.filter((element) => element.language === "java" && element.indian === true)
console.log(indianJava);

console.log(students.filter((nums) => {
    return nums.id >= 2 || nums.language === "java"
}));
// When we write function in curly braces return keyword is compulsary....
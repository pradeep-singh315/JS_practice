// for in ------------
// It is basically used in objects and it also used in arrays..

let student = {
    name : "Pradeep Singh",
    rollNo : 83,
    indian : true
}

for (const key in student) {
    console.log(key);
    console.log(student[key]);
        
    }


let arr = [2, 78, 98, 5, 32, 90]
for(const everyNumber in arr)
{
    console.log(`${arr[everyNumber]}`);
}
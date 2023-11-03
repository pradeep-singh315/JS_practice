const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//For- Each Loop
//arr.forEach((num) => console.log(num))
arr.forEach((num) => num)
// For Each Loop can print values It will not return any typpe of value. We can return value ith the help of filter functionbut we can store these values in another variable with the help f push() function...
arr.forEach((num) =>
{
    if(num > 35)
    {
        console.log(num);
    }
})

//Alternate of filter()
let newArr = []
arr.forEach((num) => {
    if(num > 35)
    {
        newArr.push(num)
    }
})
console.log(newArr);

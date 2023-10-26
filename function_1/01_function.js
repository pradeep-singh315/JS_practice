// ++++++++++++++++++++++  Functions  +++++++++++++++++
function addTwoNumbers(a, b){
        console.log("Sum is : ", a+b);
}

addTwoNumbers(3,7) 

//Function which returns something..
function square(a)
{
    return a*a
}
let numSquare = square(4)
console.log(numSquare);

// Functions with Array
let newArray = [1,2,3,4,5,6]
function addArray(arr)
{
    let sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5]
    console.log(sum);
}
addArray(newArray)
// Here, addArray ----> reference
// and, addArray() ------> execution
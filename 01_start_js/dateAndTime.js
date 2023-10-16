let date = new Date()
console.log(date)

console.log(date.toString()); //In string format
console.log(date.toLocaleString()); // In locale string format
console.log(date.getDate())
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.getUTCDate());

const dateOfToday = () => {
    let date = new Date()
    console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
    }

    dateOfToday()
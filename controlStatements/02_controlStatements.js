// Ternary Operator --------
let a = 35
let b = 56

b > a ? console.log(`b is greater than a..`):console.log(`a is greater than b`);

// Nullish Coalescing Operator -------------
let college = null
let defaultCollege = "D S College"
let result = college ?? defaultCollege
console.log(result);
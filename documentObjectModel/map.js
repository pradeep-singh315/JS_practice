let books = [
    {
        book : 1, 
        name : "Ramayana",
        price : 600,
        available : true
    },
    {
        book : 2, 
        name : "RamCharitManas",
        price : 400,
        available : false
    },
    {
        book : 3, 
        name : "BhagwadGita",
        price : 900,
        available : true
    },
    {
        book : 4, 
        name : "HanumanChalisa",
        price : 100,
        available : true
    }
]
let price = books.map((element) => {
    return element.price >= 500 && element.available === true
})
console.log(price);
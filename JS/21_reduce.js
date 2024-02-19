// Reduce - This method is used to reduce a Data Structure into a single value
//it has two arguements : accumulator & current_value
//accumulator stores the result of previous operation

let a1 = [1, 2, 3, 4, 5]

let a2 = a1.reduce( (acc, cv) => {
    return acc + cv
}, 0) //0 here is used to initialise the accumulator value we can initialise it with any value we want

// console.log(a2)

let myobj = [
    {
        course : 'JS',
        price : 12
    },
    {
        course : 'CPP',
        price : 13
    },
    {
        course : 'JAVA',
        price : 10
    },
]

let total = myobj.reduce((acc, cv) => {
    return acc+cv.price
}, 0)

console.log(`Total cost of cart is ${total}`)
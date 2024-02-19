//Map - this method operates on all of the element present in the Data Structure and also return each ele after performing the specified operation

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let new_arr = arr.map( (num) => {
    return num+10;
})

new_arr.forEach(num => {
    // console.log(num)
});

// console.log(new_arr)

//Note : map() operates on all elements and returns each element
//filter() operates on all elements but returns only true value


//-----------------CHAINING-------------------//

let a1 = [10, 11, 12, 14, 15, 16, 17, 18, 19, 20]

let a2 = a1.map( (num) => num+10)
        .map((num) => num+1)
        .filter( (num) => num > 30)

// console.log(a2)
let arr1 = ["Iron Man", "Spider Man", "HawkEye"]
let arr2 = ["Pepper", "MJ", "Black Widow"]

// arr1.push(arr2) //it will push the entire 'arr2' as an ele in arr1

// console.log(arr1)
// console.log(arr1[3][1]) //to print the second ele of arr2

// let arr3 = arr1.concat(arr2) //it will concat the two arrays instead of push the second arr as an ele

// console.log(arr3)

//spread operator

let arr4 = [...arr1, ...arr2] //it also concats arrays but it is helpful when we have to concatenate more than two arrays
//we can pass 'n' numbers of arrays to concatenate using spread operator

// console.log(arr4)

//simplifying arrays

let arr5 = [1, 2, 3, [4, 5, 6], [7, [8, 9]]]

let arr6 = arr5.flat(Infinity) //passing infinity as not that much good practice, we shoud pass the actual depth of the array but we can also pass infinity when the depth is too deep or if we don't know it

// console.log(arr6)

// console.log(Array.isArray("Mohit"))
// console.log(Array.from("Mohit"))
// console.log(Array.from({name : "Mohit"})) //don't know this exactly now

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //to make an array of random ele
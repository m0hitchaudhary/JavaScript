// let arr = [0,1,2,3,4,5]

let arr = new Array(0,1,2,3,4,5)
// console.log(arr)
// console.log(arr[3])

//methods in array


arr.push(6) //inserts ele at the end of the array
// console.log(arr)

arr.pop() //removes an ele from the last
// console.log(arr)

arr.unshift(6) //inserts ele to the start of the array
// console.log(arr)

arr.shift() //removes an ele from the start
// console.log(arr)

let arr2 = arr.join() //copies an array to the specified variable but the ouput is not an array but a string
// console.log(arr2)

// console.log(arr.includes(4)) //tells whether the arr contains passed value or not

/* ************************************SlICE AND SPLICE*************************** */

console.log("A", arr)

let newArr = arr.slice(1,3) //copies the ele within the given range(excluding the last) and passes it to the specifies variable, it does no changes to the original array
// console.log(newArr)

// console.log("B", arr)

let arr3 = arr.splice(1,3) //it extracts the ele within the range thus making changes to the original array
console.log(arr3)

console.log("C", arr)
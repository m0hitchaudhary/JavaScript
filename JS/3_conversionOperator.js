let score = 33
// console.log(score)
// console.log(typeof score)

let strScore = String(score) //it gets converted to string
// console.log(strScore)
// console.log(typeof strScore)

let newScr = "33abc"
// console.log(typeof newScr)

let x = Number(newScr) //it converts the str into number but the str doesn't accepts the number datatype
// console.log(x) //it will print 'NaN' as the str couldn't be converted into number
// console.log(typeof x) //it will print 'number' but the value is not a number actually!


// ***********************************Operations******************************


console.log('1' + 2 + 2) //it will print '122' as the first ele is a string, so it follows the string concatenation instead of number addition

console.log(1 + 2 + '2') //it will follow number addition and will print '32' instead of '122'
const name = "Mohit"
const surname = "Chaudhary"

// console.log(name + surname) //this is an outdated method to print strings

// console.log(`My name is ${name} ${surname}`) //this is the modern way to print strings

const newString = new String("Mohit Chaudhary") //this syntax uses Objects of JS to declare strings behind the scene the old methods also uses objects of JS there is just syntax diff

// console.log(newString)
// console.log(newString[4]) //it gives the value at a particular index
// console.log(newString.__proto__) //returns the type

/* ****************Functions of String******************* */

// console.log(newString.length)
// console.log( newString.toUpperCase() )
// console.log( newString.charAt(6) )
// console.log( newString.indexOf('a') ) //returns the first index of the given ele

const string1 = new String(newString.substring(0, 5)) //it will extract the index specified substring, but it cannot take negative values
// console.log(string1)

// const string2 = newString.slice(-10,1)  //it is not working properly at the moment
// console.log(string2)

const string3 = "       Mohit Chaudhary     "
// console.log(string3.trim()) //trim removes whiteSpaces from start and end only

const url = "m0hitchaudary%20github"
console.log(url.replace('%20', "-")) //it replaces a particular section with the one you pass as a second arguement to it

console.log(url.includes('mohit')) //tells whether the passed arguement is present in the strign or not

const string4 = new String("Mohit-Chaudhary-GitHub")
console.log(string4.split('-')) //basically, splits and returns values based on the arguement passed
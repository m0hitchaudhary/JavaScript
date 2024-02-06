const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); //used to fix number of digits after decimal & it returns string as a output

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //makes the value precise by rounding it off and the arguement passed determines the number of total digits in the output

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //it is used to format the value as per american number system

// console.log(hundreds.toLocaleString('en-IN')); //it is used to format the value as per INDIAN number system

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //generates a random value between 0-1
console.log((Math.random()*10) + 1); //returns a random value between 1-10, +1 is done to avoid 0
console.log(Math.floor(Math.random()*10) + 1);//returns only the integer part of the random value generated

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //formula to generate random value between a particular range, +1 is done to avoid 0 value
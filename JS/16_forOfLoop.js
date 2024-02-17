//FOR OF loop
//it is similar to for-each loop in java, it goes through every element(object/string/number) of the array.
//It automatically detects the start and end of the array

let arr = [1,2,3,4,5]
for(let i of arr){
    // console.log(i);
}

let s1 = "Hello Mohit!"
for(let i of s1){
    // console.log(i);
}

//MAPS - like dictionary in python, map also stores key-value pair in order which they are entered, maps doesn't store duplicate values

let m1 = new Map();
m1.set('M', 'Mohit')
m1.set('P', 'Parul')
m1.set('S', 'Someone')

// console.log(m1)

for(let [key, value] of m1){ //[key, value] is a syntax which destructures the map and we can pritn key, value or both as per our need
    console.log(key, ":-", value)
}

//the above syntax will not wokr for iterating over arrays, thay have thier own syntaxes
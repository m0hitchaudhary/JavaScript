let myDate = new Date()
// console.log(myDate) //prints date but the format is complex

// console.log(myDate.toLocaleString()) //gives date and time in a readable format but the time is from another time zone

// console.log(myDate.toLocaleDateString()) //just prints date not time

// console.log(myDate.toString())

// let newDate = new Date(2023, 10, 24)
// console.log(newDate.toString())

// let newDate = new Date(2023, 10, 24, 5, 24) //last two arguements represent hour and minute n goes so on
// console.log(newDate.toString())

let tStamp = Date.now() //returns the Time-Stamp in milli-seconds with referance to today
// console.log(tStamp)

// console.log(myDate.getTime())
// console.log(myDate.getMonth() + 1) //month starts from '0' so +1 is done

// console.log(`Today is ${myDate.getDay()}`) //returns day as a numeric value, Moday == 1

console.log(myDate.toLocaleString('default',{
    weekday : "long",  //returns Day in word format
}))
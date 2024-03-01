let printing = (str) => {
    console.log(str, Date.now())
}

setInterval(printing, 2000, "Mohit")

//the first parameter is the reference of the function, the second one is the interval itself, the third one is the string that we want to print

//setInterval() - takes three parameters
//setTimeout() - takes two parameters
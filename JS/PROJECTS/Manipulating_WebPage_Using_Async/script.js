setTimeout(() => {
    console.log("Wassup, you have spent 2 seconds on this web page!!")
}, 2000)

// setTimeout() method is used to perform a task after a particular period of time
//it requires a handler(basically a call_back function) and time(in ms).


let changeHeading = setTimeout(() => {
    document.querySelector('h1').innerHTML = "Learning Javascript!!"
}, 5000);


document.getElementById("stop").addEventListener('click', (e) => {
    clearTimeout(changeHeading);
    console.log("Stopped The Change In Heading")
})
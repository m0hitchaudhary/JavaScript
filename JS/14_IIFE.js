//Immediately Invoked Function Expression

//we use IIFE to immediately call the function just after the function defination to prevent pollution from global scope variables

//we just have to the '()()' syntax in () we will define the function and in the second () we will pass the arguements

// (function f1() {
//     console.log("Hello User")
// })()



//Using ARROW function

( (name) => {
    console.log(`Hello ${name}`)
})("Mohit")
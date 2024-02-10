const user = {
    username : "Mohit",
    price : 999,
    welcome : function(){
        console.log(`Welcome ${this.username}`) //'this' is used to refer to the current context
        console.log(this) //it will print the whole context i.e, the whole object
    }
}

// user.welcome()
// user.username = "Monu"
// user.welcome()

// console.log(this) //this statement returns '{}' in case of 'node environment' bc it is the most global thing but in case of console it returns 'window' as output bc in that particular case window is the most global object


//let's use 'this' keyword in Functions


function welcome(){
    let username = "Mohit"
    console.log(this.username) //it will return 'undefined' bc 'this' doesn't work in case of function it only works with objects
}

// welcome()

const welcome2 = function(){
    let username = "Mohit"
    console.log(this.username) //it also doesn't work with expressions nor arrow functions
}

// welcome2()

const welcome3 = () => {
    let username = "Mohit1"
    console.log(this.username)
}

// welcome3()

//when we return an ouput using 'return' keyword then it is known as explicit return

const hellooo = () =>{
    let name = "Someone"
    return `Hello ${name}`
}

// console.log(hellooo())


//when we don't use 'rerturn' keyword to return a result then it is known as implicit return

const hello1 = (name) => `Hello ${name}`

// console.log(hello1("Mohit"))
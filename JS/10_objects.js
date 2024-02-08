//we have two methods to create objects in JS, the first one is by using constructor
//Object.create - singleton is created

//2) Object literal - no singleton created

const mySym = Symbol("key1")

const myobj = {
    name : "Mohit",
    ID : "12217984",
    Course : "B.Tech",
    isLoggedIn : false,

    [mySym] : "myKey1",
}

//we have to methods to access ele
//1) Dot method
// console.log(myobj.name)

//2) Using [" "] method

// console.log(myobj["Course"])

//Symbols can only be accessed by using [ ] method but we don't use " " in case of Symbols

// console.log(myobj[mySym])


//Changing the values

myobj.name = "Mohit Chaudhary"
// console.log(myobj["name"])

//If want to make the values permanent then 'freeze' is used

// Object.freeze(myobj)

// myobj.name = "Mohit" //no change will occur
// console.log(myobj.name) //prints the old value, i.e "Mohit Chaudhary"


myobj.greeting = function(){
    console.log("Hello user!")
}

console.log(myobj.greeting())

myobj.greeting2 = function(){
    console.log(`Hello user, ${this.name}`) //this is used to access the ele of the object
}

console.log(myobj.greeting2())
function myfunc(name){
    console.log(`${name} just logged in`)
}

// myfunc("Mohit")

//handling objects as arguement

const user = {
    name : "Mohit",
    surname : "Chaudhary"
}

function fun2(anyObject){
    return `User Name is ${anyObject.name} ${anyObject.surname}`
}

// console.log(fun2(user))

//handling array as an arguement

const arr1 = [1, 2, 3, 4, 5]

function fun3(getArray){
    return `The second element of the given array is ${getArray[1]}`
}

console.log(fun3(arr1))
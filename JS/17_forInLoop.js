//For In loop is used to iterate over objects, they return 'keys' instead of whole key-value pair

let myobj = {
    m : 'Mohit',
    p : 'Parul'
}

for (const key in myobj) {
    // console.log(key) //it just prints the key
    // console.log(myobj[key]) //it prints the value
}

let arr = [1,2,3,4,5]
for (const key in arr) {
    console.log(key) //it will the print indices(i.e., keys in case of arrays)
    console.log(arr[key]) //it will the print actual value
}


//For of loop - works for 'Map', prints the actual value
//For of loop - works for 'Objects', prints the index of the value
let lang = ['c++', 'JS', 'Java', 'Python', 'C']
lang.forEach(function (i) {
    // console.log(i);
})

//For Each - we pass a callback function which defines the process we want to perform
//callback func doesn't have a name

lang.forEach((value) => {
    // console.log(" ",value)
})

//we can also give reference of a function in place of callback function

printMe = (value) => {
    // console.log(value)
}

lang.forEach(printMe)

//------printing particular values from an array of objects

let arr = [
    {
        short : 'JS',
        full : 'JavaScript'
    },
    {
        short : 'cpp',
        full : 'c plus plus'
    },
    {
        short : 'J',
        full : 'Java'
    }
]

arr.forEach((value) => {
    console.log(value.short);
    console.log(value.full);
})
const tinderUser = new Object()

tinderUser.name = "Mohit"
tinderUser.id = "1110"
tinderUser.pic = "no"

// console.log(tinderUser)

const normie = {
    id : 15425,
    username : {
        userFullName : {
            firstName : "Mohit",
            lastName : "Chaudhary" //nesting can be done to any extent
        }
    }
}

// console.log(normie.username.userFullName.firstName) //syntax to access nesting

//pushing an object into another

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

const obj3 = {obj1, obj2}

// console.log(obj3)

//to add two objects

const obj4 = Object.assign({}, obj1, obj2) //in this method the first object is the target obj n all the other objects are source objects
//the ele from source objects are copied to target object
//'{}' is used as the empty target object in which all the values from sources are copied

// console.log(obj4)

//we can also concatenate objects by using 'spread oprtr' too

const obj5 = {...obj1, ...obj2}
// console.log(obj5)

const user = [
    {
        email : "dsfd@gmail.com"
    },
    {
        email : "fsdv@yahoo.com"
    },
    {
        email : "fbfvsfv@outlook.com"
    }
]

// console.log(user[2].email)

// console.log(Object.keys(tinderUser))


// console.log(Object.values(tinderUser))


// console.log(Object.entries(tinderUser)) //returns all the 'key-value' pairs in an array

//Object de-structuring

const course = {
    name : "B.Tech",
    courseInstructor : "Mohit"
}

// console.log(course.courseInstructor)

//instead of writing this whole long statement we can de-structuring

const {courseInstructor} = course

//now we can just use 'courseInstructor' to print it's value

// console.log(courseInstructor)

//we can also assign another identifier to print courseInstructor

const {name : n} = course //syntax

console.log(n)
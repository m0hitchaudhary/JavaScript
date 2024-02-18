//filter - for Each loop was working fien but it couldn't return values and sometimes we need to return the values. So, filter method it used. 
//in filter method we can return the elements which qualifies a particular set of conditions

let arr = [1, 2, 3, 4, 5]

let value = arr.filter( (num) => {
    return num>3;
})

// console.log(value)

let books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let v1 = books.filter( (num) => {
    if(num.genre === 'History' && num.publish > 1900){
        return num
    }
  })

//   console.log(v1)
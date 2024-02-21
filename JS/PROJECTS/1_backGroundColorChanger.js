let button = document.querySelectorAll('.button')
let body = document.querySelector('body')

button.forEach( (button) => {
  button.addEventListener('click', (e) => {
    if(e.target.id === 'green'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'pink'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'beige'){
      body.style.backgroundColor = e.target.id;
    }
  })
})
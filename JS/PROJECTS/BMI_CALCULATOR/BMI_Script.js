let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector('#height').value )
  let weight = parseInt(document.querySelector('#weight').value )
  let results = document.querySelector('#results')
  if(height == '' || height < 0 || isNaN(height)){
    results.innerHTML = `Enter valid Height ${height}`;
  }
  else if(weight == '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Enter valid Weight ${weight}`;
  }else{
    let bmi = (weight/(height * height)).toFixed(2);
    results.innerHTML = `Your BMI is ${bmi}`
  }
})
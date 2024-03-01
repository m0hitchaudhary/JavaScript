let randomColor = () => {
    let hex = '0123456789ABCDEF'
    let color = '#';

    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
        //we have multiplied the random number by 16 bc the hex system has 16 values and it will automatically convert the value between 10 and 16 to Alphabets.
    }

    return color;
}

console.log(randomColor());

let intervalId; //we have created this to take the reference while using the start and stop functions

let startChanging = () => {

    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }

    intervalId = setInterval(changeColor, 1000)
}

let stopChanging = () => {
    clearInterval(intervalId)
}

document.querySelector('#start').addEventListener('click', startChanging);


document.querySelector('#stop').addEventListener('click', stopChanging);
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
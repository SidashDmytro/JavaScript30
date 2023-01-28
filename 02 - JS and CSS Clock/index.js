let secondHand = document.querySelector('.second-hand');
let mindHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    console.log(`${hours} : ${minutes} : ${seconds}`);
    secondHand.style.transform = `rotate(${90 + seconds * 6}deg)`
    mindHand.style.transform = `rotate(${90 + (minutes + seconds / 60) * 6}deg)`
    hourHand.style.transform = `rotate(${90 + (hours + minutes / 60) * 30}deg)`
}

setInterval(setDate, 1000);
function updateClock() {
    const now = new Date();
    
    // Hours, minutes, and seconds are taken from local time.
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Time if it's a single digit (e.g., 5), then add a '0' before it (05)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // HTML element to display live time
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Every 1 second (1000 milliseconds) update the clock
setInterval(updateClock, 1000);

// Call updateClock immediately when the page loads
updateClock();
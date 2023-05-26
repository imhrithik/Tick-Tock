const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");

setInterval(function() {
    let time = new Date();

    let secs = time.getSeconds() * 6;
    let mins = time.getMinutes() * 6;
    let hrs = time.getHours() * 30;
    
    sec.style.transform = `rotateZ(${secs}deg)`;
    min.style.transform = `rotateZ(${mins}deg)`;
    hour.style.transform = `rotateZ(${hrs + (mins/12)}deg)`;
}, 1000)

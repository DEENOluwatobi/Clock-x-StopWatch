function clock(){
    let hour = document.querySelector('.hour');
    let minute = document.querySelector('.minute');
    let seconds = document.querySelector('.seconds')
    let ampm = document.querySelector('.ampm');

    let currentHour = new Date().getHours();
    let currentMinute = new Date().getMinutes();
    let currentSeconds = new Date().getSeconds();
    var am = 'AM';

    if(currentHour > 12){
        currentHour = currentHour - 12;
        var am = 'PM'
    }

    if(currentHour == 12){
        currentHour = currentHour;
    }  

    if(currentHour < 10){
        currentHour = '0' + currentHour;
    }

    if(currentSeconds < 10){
        currentSeconds = '0' + currentSeconds;
    }

    if(currentMinute < 10){
        currentMinute = '0' + currentMinute;
    }


    hour.innerHTML = currentHour;  
    minute.innerHTML = currentMinute; 
    seconds.innerHTML = currentSeconds;
    ampm.innerHTML = am
}

let Interval = setInterval(clock, 1000)

// STOPWATCH

let swHour = document.querySelector('.sw-hour')
let swMinute = document.querySelector('.sw-minute');
let swSeconds = document.querySelector('.sw-seconds');
let swMillsecs = document.querySelector('.sw-millsecs');

let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let btnReset = document.querySelector('.reset');

let hr = 00;
let min = 00;
let sec = 0;
let mils = 00;
let Intervals;

btnStart.addEventListener('click', () => {
    Intervals = setInterval(() => {
        mils++;
        swMillsecs.innerHTML = mils; 
        hmscheck();
        zeromilcheck();
        zeroseccheck();
        zeromincheck();
        zerohrcheck();
    }, 10)
})

zeromilcheck = () => {
    if (mils < 10) {
        swMillsecs.innerHTML = '0' + mils
    } 
}
zeroseccheck = () => {
    if(sec <= 9){
        swSeconds.textContent = '0' + sec
    }
}
zeromincheck = () => {
    if( min <= 9){
        swMinute.innerHTML = '0' + min
    }
}
zerohrcheck = () => {
    if( hr <= 9){
        swHour.innerHTML = '0' + hr
    }
}

hmscheck = ()=>{
    if(mils == 99){
        mils = 00;
        swSeconds.innerHTML = sec;
        sec++;
    }
    if(sec == 59){
        sec = 00;
        swMinute.innerHTML = min;
        min++;
    }
    if(min == 59){
        min = 00;
        swHour.innerHTML = hr;
        hr++;
    }
}
btnStop.addEventListener('click', () => {
    clearInterval(Intervals)
})  
btnReset.addEventListener('click', () => {
    hr = 00;
    min = 00;
    sec = 00;
    mils = 00;

    swHour.innerHTML = '0' + hr;
    swMinute.innerHTML = '0' + min;
    swSeconds.innerHTML = '0' + sec;
    swMillsecs.innerHTML = '0' + mils;
    clearInterval(Intervals);
}) 
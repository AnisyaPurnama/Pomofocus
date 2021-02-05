'use strict';

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const pminutes = document.getElementById('p-minutes');
const pseconds = document.getElementById('p-seconds');
const bminutes = document.getElementById('b-minutes');
const bseconds = document.getElementById('b-seconds');

//store a reference to a timer variable
let startTimer;
start.addEventListener('click', function(){
    if(startTimer === undefined){
    startTimer = setInterval(timer, 1000)
} 
else {
    alert("Timer is running!")
}
});

stop.addEventListener('click', function(){
    stopInterval();
    startTimer = undefined;
    });
class Timer {
    constructor (start, stop) {
    this.start = start;
    this.stop = stop;
}
    
get start() {
return this.start;
}

set start (startTimer) {
if(pseconds.innerText != 0){
    pseconds.innerText--;
} 
else if(pminutes.innerText != 0 && pseconds.innerText == 0){
    pseconds.innerText = 59;
    pminutes.innerText--;
}
this.start = startTimer
}

get stop(){
    return this.stop;
}
set stop(StopTimer) {
    if(pminutes.innerText == 0 && pseconds.innerText == 0){
        if(bseconds.innerText != 0){
        bseconds.innerText--;
        } 
    else if(bminutes.innerText != 0 && bseconds.innerText == 0){
        bseconds.innerText = 59;
        bminutes.innerText--;
        }
    }
    stop(){
    clearInterval(startTimer);
        this.startTimer = undefined;
    }
}

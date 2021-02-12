'use strict';

// import all listener files so they can attach to the DOM

// does your project have code that executes when the document or window are ready?
// that code can go here

import { pomoDoroHandler, longBreakHandler, shortBreakHandler, timeHandler, changeActive } 
        from '../../handlers/timeHandler.js';
import { changeBg } from '../../src/data.js';
import { addNewTask} from '../../src/handlers/NewTaskHandler.js';

const startBtn = document.getElementById('start-btn');
const pomoDoro = document.getElementById('pomodoro');
const shortBreak = document.getElementById('short-break');
const longBreak = document.getElementById('long-break');
pomoDoro.addEventListener('click', pomoDoroHandler);
longBreak.addEventListener('click', longBreakHandler);
shortBreak.addEventListener('click', shortBreakHandler);

// start button
startBtn.addEventListener('click', timeHandler);

//Change color
document.getElementsByClassName('time-btn-wrapper')[0].addEventListener('click', changeBg);

document.getElementsByClassName('time-btn-wrapper')[0].addEventListener('click', changeActive);

// add new task
document.querySelector('.add-task-container').addEventListener('click', addNewTask);
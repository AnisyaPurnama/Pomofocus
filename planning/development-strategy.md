# Pomodoro timer: Practical JavaScript

A Practical JavaScript Pomodoro timer

---

## Data

> describe the data used in your project.
>
> - what properties? Start time, Stop/pause time, break time
> - what types? Objects and functions
> - what are array entries like? Prototype

---

## User Story Dependencies

![Story Dependency Diagram](https://github.com/AnisyaPurnama/Pomofocus/blob/master/public/userStoryPomo.png?raw=true)

---

## WIREFRAME

![wireframe](https://github.com/AnisyaPurnama/Pomofocus/blob/master/public/wireframepomodoro.png?raw=true)

---

## 0.Setup

- Start a repo.
- Study (and possibly modify) the backlog
- Design a simple wireframe to set guidelines for UI/UX design.
- Devise a development strategy.

---

## 1. Initialize Application

**As a user I want to see the home page when I load the site**

- create HTLM index
- style with CSS

### REPO

- All the user story is developed on branch `master`.

### Task A
**As a user I want to start a timer and focus on the task for 25 minutes**

#### HTML
- Create start button `start`

#### CSS
- Styled the presentation of button, color, font, etc.

#### JS
- set the `timer`functionality in a class
- create EventListener `start`
- set the time Interval `setInterval`



### Task B
**As a user I want to pause the timer**
#### HTML
- Create pause button `pause`

#### CSS
- Styled the presentation of button, color, font, etc.

#### JS
- create the `stop` functionality in a class 
- create EventListener `stop`
- stop the time Interval `stopInterval` & `clearInterval`


### Task C
**As a user I want have a break timer for 5 minutes**
#### HTML
- Create short break feature `Short Break`

#### CSS
- Styled the presentation of button, color, font, etc.

#### JS
- create condition in `timer` function
---

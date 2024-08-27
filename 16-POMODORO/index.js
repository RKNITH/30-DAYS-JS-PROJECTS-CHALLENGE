const header = document.getElementById('header')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const start = document.getElementById('start')
const restart = document.getElementById('restart')
const pause = document.getElementById('pause')
const round = document.getElementById('round')


let timerId = null
const WORK_TIME = 5
const BREAK_TIME = 4
let rounds = 0
let isWorking = true

const formateTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`
}

let work = WORK_TIME
let breaks = BREAK_TIME
function displayTimer(time) {
    let mins = Math.floor(time / 60)
    let secs = Math.floor(time % 60)

    min.innerHTML = formateTime(mins)
    sec.innerHTML = formateTime(secs)

}

displayTimer(work)

const startTimer = () => {
    header.innerHTML = 'Work'

    if (!timerId) {
        timerId = setInterval(() => {
            if (isWorking) {
                if (work >= 0) {
                    displayTimer(work)
                    work--

                }
                else {
                    header.innerHTML = 'Break'
                    work = WORK_TIME
                    isWorking = false
                }

            }
            else {
                if (breaks >= 0) {
                    displayTimer(breaks)
                    breaks--
                }
                else {
                    header.innerHTML = 'Work'
                    breaks = BREAK_TIME
                    isWorking = !isWorking
                    rounds++
                    round.innerHTML = `you have completed ${rounds}`

                }
            }

        }, 1000)
    }

}

const restartTimer = () => {
    clearInterval(timerId)
    header.innerHTML = 'Pomodoro'
    work = WORK_TIME
    breaks = BREAK_TIME
    displayTimer(work)

}

const pauseTimer = () => {
    if (timerId) {
        clearInterval(timerId)
        timerId = !timerId
    }

}


start.addEventListener('click', startTimer)
restart.addEventListener('click', restartTimer)
pause.addEventListener('click', pauseTimer)

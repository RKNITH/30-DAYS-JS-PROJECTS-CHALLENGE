const hours = document.getElementById('hours')
const mins = document.getElementById('mins')
const secs = document.getElementById('secs')
const start = document.getElementById('start')



let timerValue = 365
let timerId = null

let hour = Math.floor(timerValue / 60 / 60)
let minutes = Math.floor(timerValue / 60)
let second = Math.floor(timerValue % 60)

const formateTime = (time) => {
    return time < 10 ? `0${time}` : time;

}
hours.innerHTML = formateTime(hour)
mins.innerHTML = formateTime(minutes)
secs.innerHTML = formateTime(second)


start.addEventListener('click', () => {
    if (timerId == null) {
        let timerId = setInterval(() => {
            timerValue -= 1
            let hour = Math.floor(timerValue / 60 / 60)
            let minutes = Math.floor(timerValue / 60)
            let second = Math.floor(timerValue % 60)
            if (timerValue < 0) {
                alert('Time Over')
            }

            hours.innerHTML = formateTime(hour)
            mins.innerHTML = formateTime(minutes)
            secs.innerHTML = formateTime(second)

        }, 1000)
    }
})


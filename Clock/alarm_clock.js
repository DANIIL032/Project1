let alarm = window.localStorage.getItem('day')
let time = document.querySelector("#time")
let days = document.querySelectorAll(".Day img")
if (alarm) {
    for (let d = 0; d < days.length; d += 1) {
        if (alarm.includes(days[d].id)) {
            days[d].classList.add("Day__Selected")
        }
    }
}

let storage_time = window.localStorage.getItem('time')
if (storage_time) {
    time.value = storage_time;
}

function select_day(event){
    console.log(event.target.tagName)
    if (event.target.tagName === 'IMG'){
        let day = event.target.id
        let alarm = window.localStorage.getItem('day') || ""
        if (alarm.includes(day)) {
            let index = alarm.indexOf(day)
            let updatedAlarm = alarm.slice(0, index) + alarm.slice(index + day.length)
            window.localStorage.setItem('day', updatedAlarm)
            event.target.classList.remove("Day__Selected")
        }
        else {
            alarm += day
            window.localStorage.setItem('day', alarm)
            event.target.classList.add("Day__Selected")
        }
    }  
}

function select_time(event){
    console.log(event.target.value)
    window.localStorage.setItem('time', event.target.value)
}

let week = document.querySelectorAll(".Day")
for (let w = 0; w < week.length; w += 1) {
    week[w].addEventListener('click', select_day)
}

time.addEventListener("change", select_time)

function enable_alarm_clock(){
    window.localStorage.setItem("field", "FRIday")
    window.localStorage.getItem("field")
    console.log(window.localStorage.getItem("field"))
}

setInterval(function() {
    let date = new Date()
    console.log(date.getHours())
    console.log(date.getMinutes())
    let clock_time = `${date.getHours()}:${date.getMinutes()}`
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const day = days[date.getDay() - 1]
    console.log(day)
    console.log(clock_time)
    const storage_hours = window.localStorage.getItem('time')
    const storage_days = window.localStorage.getItem('day')
    if (storage_hours === clock_time && storage_days.includes(day)) {
        const audio = new Audio('alarm-clock.mp3');
        audio.loop = false;
        audio.play();
    }
}, 1000 * 60)

export{enable_alarm_clock}
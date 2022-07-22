import {add_track, cleaner_tracks} from "./track.js"
import {enable_alarm_clock} from "./alarm_clock.js"
import {parse_seconds} from "./time.js"

let count_seconds = 0
let is_timer_enabled = false

setInterval (function(){
    if (is_timer_enabled){
        count_seconds += 1
        console.log(count_seconds)
        show_time(count_seconds)
    } 
}, 1000)

let play = document.querySelector(".Play")
let img = play.querySelector("img")
let flag_1 = document.querySelector(".Lap")

function click_play() {
    console.log(img.src)
    if (img.src.endsWith("play-button-arrowhead.png")) {
        img.src = "./Picutres/pause.png"
        is_timer_enabled = true
    }
    else {
        img.src = "./Picutres/play-button-arrowhead.png"
        is_timer_enabled = false
    }
}
play.addEventListener("click", click_play)

let buttons = document.querySelectorAll("button")
console.log(buttons)
for (let h = 0; h < buttons.length; h += 1) {
    console.log(buttons[h])
}
function show_time(time){
    let zero = document.querySelector(".Zero")
    zero.textContent = parse_seconds(time)
}

let repeat = document.querySelector(".Repeat")

repeat.addEventListener("click", function(){
    count_seconds = 0
    is_timer_enabled = false
    img.src = "./Picutres/play-button-arrowhead.png"
    show_time(count_seconds)
    let flag = document.querySelector(".Flag")
    flag.style.visibility = 'hidden'
    cleaner_tracks()
})

flag_1.addEventListener('click', function(){
    if (is_timer_enabled){
        add_track(count_seconds)
    }
})

let bell = document.querySelector(".Bell")

bell.addEventListener('click', function(){
    if (is_timer_enabled){
        enable_alarm_clock(count_seconds)
    }
})

enable_alarm_clock()
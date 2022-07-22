import {parse_seconds} from "./time.js"

let track_count = 0
let track_start = 0
let track_end = 0
 
let track_time  = `
<div class="Time"> 
<h1>0</h1>
<h1 class="Track-time">00:00:00</h1>
<h1 class="Total-time">00:00:00</h1>
</div>
`

function add_track(time){
    if (track_end === 0) {
        track_end = time
    }
    let tmp = track_end
    track_end = time
    let flag = document.querySelector(".Flag")
    flag.style.visibility = 'visible'
    let track_lap = document.createElement("div")
    track_lap.innerHTML = track_time
    track_count += 1
    let total_time = parse_seconds(time)
    let time_track = parse_seconds(track_end - track_start)
    track_start = tmp

    track_lap.querySelector("h1").innerHTML = track_count
    track_lap.querySelector(".Track-time").innerHTML = time_track
    track_lap.querySelector(".Total-time").innerHTML = total_time

    flag.appendChild(track_lap)
}

function cleaner_tracks(){
    track_count = 0
    track_start = 0
    track_end = 0
    let clean = document.querySelectorAll(".Time")
    clean.forEach(function (tracks){
        tracks.remove()
    })
}

export{add_track, cleaner_tracks}
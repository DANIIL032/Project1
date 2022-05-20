let lap = { 
    time: "13:34:57",
    index: 1,
    isfastest: true,
    islowest: false,
}
console .log(lap.time)
let f = [ 24, 46, 68, 80]
for (let i = 0; i < f.length; i += 1) {
    console .log(f[i]) 
}
let play = document.querySelector(".Play")
console.log(play) 
function click_play() {
    let img = play.querySelector("img")
    console.log(img.src)
    if (img.src.endsWith("play-button-arrowhead.png")) {
        img.src = "http://localhost:5500/Clock/Picutres/pause.png"
    }
    else {
        img.src = "http://localhost:5500/Clock/Picutres/play-button-arrowhead.png"
    }
}
play.addEventListener("click", click_play)

let buttons = document.querySelectorAll("button")
console.log(buttons)
for (let h = 0; h < buttons.length; h += 1) {
    console.log(buttons[h])
}
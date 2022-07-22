function parse_seconds(time){
    let hours = Number.parseInt(time/3600)
    time -= hours * 3600
    let minutes = Number.parseInt(time/60)
    time -= minutes * 60
    let seconds = time
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    return hours + ":" + minutes + ":" + seconds
}

export {parse_seconds}
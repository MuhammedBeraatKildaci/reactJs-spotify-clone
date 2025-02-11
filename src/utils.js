function secondsToTime(seconds) {
    return new Date(1000 * seconds)
        .toISOString()
        .slice(14, 19)
}

export {
    secondsToTime
}
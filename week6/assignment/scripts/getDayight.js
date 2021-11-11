// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.

export default function colorChange(currentTime, sunrise, sunset) {

    let backColor

    if (currentTime < sunrise || currentTime > sunset) {
        backColor = 'black'
    } else {
        backColor = 'blue'
    }

    return backColor
}
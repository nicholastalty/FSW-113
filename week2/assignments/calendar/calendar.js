// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

// modify this script to use the first day of the month the user selects in place of the const today 

const myMonths = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] 

let monthOptions = myMonths.map((curMonth, curIndex) => 
    `<option value=${curIndex+1}>${curMonth}</option>`
);

//console.log('monthOptions: ', monthOptions)

document.getElementById('calendarMonth').innerHTML = monthOptions

document.getElementById('calendarPrint').addEventListener(
    'click', function() {printCalendar()}
)

function printCalendar() {

    document.getElementById('calendarDays').innerHTML = ''

    //const today = new Date

    //const month = today.getMonth()

    const selMonth = document.getElementById('calendarMonth').value

    const inputYear = document.getElementById('calendarYear').value

    const calDate = `${selMonth}/1/${inputYear}`

    const firstDate = new Date(calDate)

    console.log('selected Month: ', selMonth)


    let days
    switch (parseInt(selMonth)) {
        case 2:
            days = 28
            break
        case 3:
        case 5:
        case 8: 
        case 10:
            days = 31
            break
        default:
            days = 31
    }

    console.log('days: ', days)
        
    let x
    //const weekday = today.getDay()
    const weekday = firstDate.getDay()
    for (x = 0; x < weekday; x++){
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    }

    let dt = 0
    do {
        dt++
        document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
    } while ( dt < days)

    //const monthName = today.toLocaleDateString('default', {month:'long'})
    //const year = today.getFullYear()

    const monthName = firstDate.toLocaleDateString('default', {month:'long'})
    const year = firstDate.getFullYear()

    document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`

    const remainder = (7 - ((x + dt) % 7))
    let y = 0
    while ( y < remainder) {
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
        y++
    }
}

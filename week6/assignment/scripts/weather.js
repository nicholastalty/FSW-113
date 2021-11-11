// import the convertTemp.js and getDaylight.js scripts with their default export
import convertTemp from './convertTemp.js'
import colorChange from './getDayight.js'

//  api.openweathermap.org/data/2.5/weather?q={strCity}&appid={0e31f14f4e944d202dd1675424d05b99}

// declare any variables needed
let strCity
const apiKey = '0e31f14f4e944d202dd1675424d05b99'

//Ok, where do I start?
// create an event listener for the click of the goBttn that calls a function to fetch the weather data
document.getElementById('goBttn').addEventListener('click', function(){
    getData()
})

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page 
function getData() {
    strCity = document.getElementById('city').value
    getWeather()
        .then(function(data) {
            console.log('data: ', data)
            showWeather(data)
        })
        .catch(function(err) {
            console.log(err)
        })

}

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data
const getWeather = async() => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${strCity}&appid=${apiKey}`)

    return await res.json()
}

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city
function showWeather(data) {

    const currentTime = data.dt
    const sunrise = data.sys.sunrise
    const sunset = data.sys.sunset

    console.log('currentTime: ', currentTime)
    console.log('sunrise: ', sunrise)
    console.log('sunset: ', sunset)

    // convert temp & display
    document.getElementById('tempData').innerText = convertTemp(data.sys.country, data.main.temp)

    //console.log('country: ', data.sys.country)
    //console.log('kelvin: ', data.main.temp)

    // display conditions
    //console.log('conditions: ', data.weather[0].main)
    document.getElementById('conditionsData').innerText = data.weather[0].main

    // humidity display
    document.getElementById('humidData').innerText = `${data.main.humidity}%`

    // background color
    document.querySelector('.weatherWrapper').style.backgroundColor = colorChange(currentTime, sunrise, sunset)

}
// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.

export default function convertTemp(country, kelvin) {

    let temp

    if (country == 'US') {

        // F=((K-273.15)*1.8)+32
        temp = parseInt((Number(kelvin) - 273.15) * 1.8 + 32) + 'F'


    } else {

        // C=K-273.15
        temp = parseInt(Number(kelvin) - 273.15) + 'C'

    }

    return temp
   
}
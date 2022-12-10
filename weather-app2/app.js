const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}

// const request = require('postman-request')

// const url = "http://api.weatherstack.com/current?access_key=b93908448597b4c374f06cbf1c444c41&query=37.827,-122.423";
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('unable to connect to weather services')
//     }
//     else if (response.body.error) {
//         console.log('Unable to find location')
//     }
//     else {
//         console.log(response.body.location.lon);
//     }
// })

// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/starbucks.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoicGVleXVzaGs2IiwiYSI6ImNsNjBsOTR2MTAwY2czZG1yMmxpeHllcmsifQ.gIAqCZIfje7Kl7kWaB--Nw";
// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to locations services')
//     }
//     else if (response.body.features.length === 0) {
//         console.log("unable to find location.Try another services!");
//     }
//     else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(latitude, longitude);
//     }
// })


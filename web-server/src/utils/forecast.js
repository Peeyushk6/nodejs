const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = "http://api.weatherstack.com/current?access_key=b93908448597b4c374f06cbf1c444c41&query=" + latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "It is " + body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.wind_speed + '% chance of rain.')
        }
    })
}

module.exports = forecast
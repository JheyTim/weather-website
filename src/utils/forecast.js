const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/86b8d1a40afa7bdb0e2f7ae2d2c9f09f/${latitude},${longitude}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service',undefined);
        } else if (body.error) {
            callback('Unable to find location.', undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It's currently ${body.currently.temperature} degrees out. There's a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
} 

module.exports = forecast;
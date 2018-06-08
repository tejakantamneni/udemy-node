const request = require('request');

var weatherInfo = (lat, lng) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/b59515e81f9ccc54f6cfc73e12d25941/${lat},${lng}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("Unable to connect to darksky api.");
            } else if (body.code === 400) {
                reject("Invalid Latitude and Longitude.")
            } else {
                resolve({
                    temperature: body.currently.temperature
                });
            }
        });
    });
}

module.exports = {
    weatherInfo
}
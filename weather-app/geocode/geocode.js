
const request = require('request');

var geocodeAddress = (address) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBCGn5jVr3mZ5JkNds5h_VlGxcoIoD1bUQ&address=${encodeURIComponent(address)}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log("Unable to fetch the weather data.");
        } else if (body.status === 'ZERO_RESULTS') {
            console.log("address not found.")
        } else {
            console.log(JSON.stringify(body, undefined, 2));
            console.log(body.results[0].geometry.location)
        }
    });
}

module.exports ={
	geocodeAddress
}
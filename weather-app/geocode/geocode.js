const request = require('request');

var geocodeAddress = (address, callback) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBCGn5jVr3mZ5JkNds5h_VlGxcoIoD1bUQ&address=${encodeURIComponent(address)}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to google services.");
        } else if (body.status === 'ZERO_RESULTS') {
            callback("Address not Found.")
        } else {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports = {
    geocodeAddress
}
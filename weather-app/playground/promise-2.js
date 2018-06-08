
const request = require('request');

var geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		request({
	        url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBCGn5jVr3mZ5JkNds5h_VlGxcoIoD1bUQ&address=${encodeURIComponent(address)}`,
	        json: true
	    }, (error, response, body) => {
	        if (error) {
	            reject("Unable to connect to google services.");
	        } else if (body.status === 'ZERO_RESULTS') {
	            reject("Address not Found.")
	        } else {
	            resolve({
	                address: body.results[0].formatted_address,
	                lat: body.results[0].geometry.location.lat,
	                lng: body.results[0].geometry.location.lng
	            });
	        }
	    });
	});
};

geocodeAddress("129 Astra Way")
	.then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	})
	.catch((error) => {
		console.error(error);
	});
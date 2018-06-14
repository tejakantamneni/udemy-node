const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch wearther for.',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBCGn5jVr3mZ5JkNds5h_VlGxcoIoD1bUQ&address=${encodeURIComponent(argv.address)}`;
axios.get(url).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error("No address found")
    }
    var weatherUrl = `https://api.darksky.net/forecast/b59515e81f9ccc54f6cfc73e12d25941/${response.data.results[0].geometry.location.lat},${response.data.results[0].geometry.location.lng}`;
    return axios.get(weatherUrl);
})
.then((response) => {
    console.log("Temperature:", response.data.currently.temperature)
})
.catch((error) => {
    if(error.code === 'ENOTFOUND'){
        console.log("unable to connect to API servers.")
    }else{
        console.log(error);        
    }
});
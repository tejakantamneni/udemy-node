const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const darksky = require('./darksky/darksky')

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

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        //console.log(JSON.stringify(results, undefined, 2));
        darksky.weatherInfo(results.lat, results.lng, (error, weatherData) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Weather Information for", results.address, "is", weatherData.temperature);
            }
        });
    }
});
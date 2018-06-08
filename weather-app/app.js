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

geocode.geocodeAddress(argv.a)
    .then((results) => {
        return darksky.weatherInfo(results.lat, results.lng);
    })
    .then((weatherInfo) => {
        console.log("Temerature: ", weatherInfo.temperature);
    })
    .catch((error) => {
        console.error(error);
    });

const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=52cd161685e1b61723f4ceb34caac334&query=${latitude},${longitude}`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Cannot conect to weather services', undefined)
        } else if (response.body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees. The current humidity is ${response.body.current.humidity}%`)

        }
    }
    )
}

module.exports = forecast


// const latitude = 37.8267
// const longitude = -122.4233
// const url = `http://api.weatherstack.com/current?access_key=52cd161685e1b61723f4ceb34caac334&query=${latitude},${longitude}`

// request({ url: url, json: true }, (error, response) => {

//     if (error) {
//         console.log('Cannot connect to Weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees.`)

//     }
// })
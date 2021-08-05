const request = require('request')

const geocode = (address, callback) => {
    const geo = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoieWFzaGthbmVrYXIiLCJhIjoiY2tybmtwY3NkMXg1ajMxcGVtOHo5aGhpNiJ9.3cmOSr3XR555YERjLw0brw&limit=1`

    request({ url: geo, json: true }, (error, response) => {
        if (error) {
            callback('Cannot connect to goecode services')
        } else if (response.body.features.length === 0) {
            callback('Cannot find location. Try another search!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })

}
module.exports = geocode


// const geo = `https://api.mapbox.com/geocoding/v5/mapbox.places/bgfbvfgfgmfkgmkfgm.json?access_token=pk.eyJ1IjoieWFzaGthbmVrYXIiLCJhIjoiY2tybmtwY3NkMXg1ajMxcGVtOHo5aGhpNiJ9.3cmOSr3XR555YERjLw0brw&limit=1`

// request({ url:geo, json:true },(error,response) => {
//     if(error){
//         console.log('cannot connect to geo-coding service')
//     }else if(response.body.features.length === 0){
//         console.log('Location not found! Try another search')
//     }else{
//  const latitude = response.body.features[0].center[0]
//  const longitude = response.body.features[0].center[1]
//     console.log(`${latitude} , ${longitude}`)
//     }
// })


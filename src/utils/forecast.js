const request = require('request')

const forecast = (longitude, latitude, callback) => {

    const url = 'https://api.darksky.net/forecast/58bd4f85aac4d056d044b3cdd87b77a6/' + latitude + ',' + longitude
    
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback("Can't connect to weather service. Check your internet.", undefined)
        } else if(body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: 'It is currently '+ body.currently.temperature + ' degrees out there',
                precipitability: 'There is a ' + body.currently.precipProbability + ' % chance of rain',
                timezone: 'Time zone is ' + body.timezone
            })
        }
    })
}

    module.exports = forecast

 
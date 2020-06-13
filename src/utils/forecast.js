const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=1af5b43249c11244b4569ef764b544bc&query=${latitude},${longitude}`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service.', undefined)
    } else if (body.error) {
      callback('Unable to find location.', undefined)
    } else {
      callback(undefined, {
        temperature: body.current.temperature,
        feelsLike: body.current.feelslike,
        weatherIcon: body.current.weather_icons
      })
    }
  })
}

module.exports = forecast
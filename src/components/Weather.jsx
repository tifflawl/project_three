import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const apiKey = 'efa49ccc449f9f72bda3ddedcbfe8373'
  const city = 'Brooklyn'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (response.data && response.data.main && response.data.weather) {
          setWeather(response.data)
        } else {
          throw new Error('Invalid weather data format')
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error)
        setError(error)
        setLoading(false)
      })
  }, [url])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {weather && (
        <div>
          <p>
            the temperature is {weather.main.temp}°F +{' '}
            {weather.weather[0].description}.
          </p>
        </div>
      )}
    </div>
  )
}

export default Weather

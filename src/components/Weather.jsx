import './styles.css'
import React from 'react'

const cityList = ['Helsinki', 'Tampere', 'Turku', 'Oulu']

export default function Weather() {
  const [weather, setWeather] = React.useState()
  const [city, setCity] = React.useState('Helsinki')

  const fetchWeather = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=dc6e198d710d27211ed68a445d1bb01e`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data)
      })
  }

  React.useEffect(() => {
    fetchWeather(city)
  }, [city])

  return (
    <div className="App">
      <div>
        <select
          onChange={(e) => {
            setCity(e.target.value)
          }}
        >
          {cityList.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </select>
      </div>
      <div style={{ marginTop: '20px' }}>
        <div>Temparature : {weather?.main?.temp}</div>
        <div>Weather : {weather?.weather?.[0]?.main}</div>
      </div>
    </div>
  )
}

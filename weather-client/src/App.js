import React from 'react'
import Titles from './components/Titles'
import Form from   './components/Form'
import Weather from './components/Weather'

const API_KEY = "d1870d24703786dfd5a6fc6fd864713a"

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault()
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=${API_KEY}`)

        const data = await api_call.json()
        //console.log(data)
  }


  render() {
    return(
    <div>
      <h1>React Is working!</h1>
      <p>Weather App</p>

      <Titles />
      <Form getWeather={this.getWeather} />
      <Weather />
    </div>
  )
  }
}
export default App

const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_Key = '&appid=29ad3c3079f849423de84ab9851783ce'
const API_UNITS = '&units=metric'

const getWeather = () => {
    const city = input.value || 'London'
    const URL = API_LINK + city + API_Key + API_UNITS
    axios.get(URL).then(res => console.log(res))
}

getWeather()
const axios = require("axios")
const url = ["https://goweather.herokuapp.com/weather/riodejaneiro","https://goweather.herokuapp.com/weather/saopaulo","https://goweather.herokuapp.com/weather/belohorizonte","https://goweather.herokuapp.com/weather/belem","https://goweather.herokuapp.com/weather/salvador","https://goweather.herokuapp.com/weather/curitiba","https://goweather.herokuapp.com/weather/riodejaneiro"]

const api = async (CITY) => {
    const weather = {
        weatherRJ: axios.get(url[0]),
        weatherSP: axios.get(url[1]),
        weatherBH: axios.get(url[2]),
        weatherBEL: axios.get(url[3]),
        weatherSSA: axios.get(url[4]),
        weatherCWB: axios.get(url[5]),
        weatherBSB: axios.get(url[6]),
        weatherCity: axios.get(`https://goweather.herokuapp.com/weather/${CITY}`)
    }

    return weather
}
module.exports = api
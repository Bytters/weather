require('dotenv').config({ path: './backend/.env' })
const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get("/", async (req, res) => {
    try {
        const City = req.query.city || "londres"
        async function getCity(city) {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.API_KEY}`)
            const data = response.data

            return {
                name: data.name,
                temp: data.main.temp,
                wind: data.wind,
                weather_icon: data.weather[0].icon
            }
        }

        async function citys() {
            let cityInfo = []
            const endpoints = [
                `https://api.openweathermap.org/data/2.5/weather?q=curitiba&units=metric&APPID=${process.env.API_KEY}`,
                `https://api.openweathermap.org/data/2.5/weather?q=sao+paulo&units=metric&APPID=${process.env.API_KEY}`,
                `https://api.openweathermap.org/data/2.5/weather?q=rio+de+janeiro&units=metric&APPID=${process.env.API_KEY}`
            ]

            await axios.all(endpoints.map(async (e) => {
                const response = (await axios.get(e)).data
                return cityInfo.push({ name: response.name, temp: `${response.main.temp}°` })
            }))

            return cityInfo
        }

        const Citys = await citys()
        const weatherInfo = await getCity(City)

        res.render("home/index.ejs", {
            city: {
                name: weatherInfo.name,
                temp: `${weatherInfo.temp}°`,
                weather_icon: weatherInfo["weather_icon"]
            },
            selectedCity: {
                cwb: Citys[0],
                sp: Citys[1],
                rj: Citys[2]
            }

        })
    } catch (error) {
        console.log(error.response.status)
        if (error) {
            res.redirect("/error")
        }
    }
})

module.exports = router 
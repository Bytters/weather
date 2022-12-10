const express = require('express')
const router = express.Router()
const api = require("../services/weatherApi")
const hasCity = require('../utils/city')
const axios = require('axios')

router.get("/", async (req, res) => {
    hasCity(req, res)
    const city = req.query.city
    const weather = await api(city)
    const temperature = {
        RJ: ((await weather.weatherRJ).data.temperature).replace("+", ""),
        SP: ((await weather.weatherSP).data.temperature).replace("+", ""),
        BH: ((await weather.weatherBH).data.temperature).replace("+", ""),
        BEL: ((await weather.weatherBEL).data.temperature).replace("+", ""),
        SSA: ((await weather.weatherSSA).data.temperature).replace("+", ""),
        CWB: ((await weather.weatherCWB).data.temperature).replace("+", ""),
        BSB: ((await weather.weatherBSB).data.temperature).replace("+", ""),
        weatherCity: ((await weather.weatherCity).data.temperature).replace("+", "")
    }

    res.render("weather/weather.ejs", {
        temperatureRJ: temperature.RJ,
        temperatureSP: temperature.SP,
        temperatureBH: temperature.BH,
        temperatureBSB: temperature.BSB,
        temperatureBEL: temperature.BEL,
        temperatureSSA: temperature.SSA,
        temperatureCWB: temperature.CWB,
        city: city,
        temperature: temperature.weatherCity
    })
})



module.exports = router
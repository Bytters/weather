const express = require("express")
const app = express()
const port = process.env.PORT || "3000"
const weather = require('./routes/weather')

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)
app.use(express.static(`${__dirname}/public/`))

app.get("/", weather)


app.listen(port, () => console.log(`Connected to ${port}`))
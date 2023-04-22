const express = require("express")
const app = express()
const weather = require('./backend/Routes/weather')
let port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/frontend/views/`)
app.use(express.static(`${__dirname}/frontend/`))

app.get("/", weather)
app.get("/error", (req, res) => {
    res.render("error/error.ejs")
})
console.log(__dirname)

app.listen(port, () => console.log(`Connected to ${port}`))
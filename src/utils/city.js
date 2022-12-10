module.exports = function hasCity(req, res) {
    let city = false
    if (req.query) {
        res.locals.city = true
    }
}